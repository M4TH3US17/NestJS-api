import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Get()
    getAllUsers(): any {
        return null;
    }

}