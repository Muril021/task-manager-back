
import { AppDataSource } from "../data-source";
import {
    DeleteResult,
    EntityTarget,
    FindOptionsWhere,
    Repository,
    UpdateResult
} from "typeorm";
import { Request } from "express";

abstract class AbstractService<Entity> {
    protected readonly repository: Repository<Entity>;

    constructor(entity: EntityTarget<Entity>) {
        this.repository = AppDataSource.getRepository(entity);
    }

    getAll(req: Request): Promise<Entity[]> {
        return this.repository.find();
    }

    create(data: Entity): Promise<Entity> {
        return this.repository.save<Entity>(data);
    }

    findById(id: string): Promise<Entity> {
        return this.repository.findOneBy({ id } as FindOptionsWhere<any>);
    }

    update(id: string, data: Entity): Promise<UpdateResult> {
        return this.repository.update(id, data as FindOptionsWhere<any>);
    }

    delete(id: string) {
        return this.repository.softDelete(id);
    }

    forceDelete(id: string): Promise<DeleteResult> {
        return this.repository.delete({ id } as FindOptionsWhere<any>);
    }
}

export default AbstractService;
