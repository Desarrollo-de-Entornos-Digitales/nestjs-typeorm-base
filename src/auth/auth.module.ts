import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Permission } from './entities/permission.entity';
import { RolePermission } from './entities/role-permission.entity';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Role, RolePermission, Permission])],
    exports: [TypeOrmModule],
})
export class AuthModule {}
