import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from 'src/user/profile/profile.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly profileService: ProfileService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    email: string,
    pass: string,
    role?: string,
  ): Promise<{ access_token: string }> {
    const _user = await this.usersService.findOne(email);
    if (_user) {
      throw new UnauthorizedException(`User with "${email}" already exists`);
    }

    const user = await this.usersService.create(email, pass, role);

    const profileToken = uuidv4();

    await this.profileService.create({
      token: profileToken,
      name: `Гость № ${user.id}`,
      gender: 'Не известно',
      height: 0,
      weight: 0,
      userId: user.id,
      diabetesTypeId: 3,
    });

    return await this.signIn(user.email, user.password);
  }
}
