import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1623007195354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type:  'varchar',
                    },
                    {
                        name: 'last_name',
                        type:  'varchar',
                    },
                    {
                        name: 'email',
                        type:  'varchar',
                    },
                    {
                        name: 'job',
                        type:  'varchar',
                    },
                    {
                        name: 'seniority',
                        type:  'varchar',
                    },
                    {   
                        name: 'technoligies',
                        type:  'varchar',
                    },
                    {
                        name: 'about',
                        type: 'varchar' 
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
