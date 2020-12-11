// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Utils
import { objectToClass } from '@utils/plain-tranformer';

export abstract class BaseCrudService<T, U> implements IBaseCrudService<T, U> {
	protected schemaItem;

	protected schemaItems;

	constructor(protected readonly repository: IBaseCrudRepository<T, U>) {}

	protected hasClassTransformer(schema: any, data: any): any {
		return schema ? objectToClass<T, U>(schema, data) : data;
	}

	async create(data: T): Promise<U> {
		return this.repository.create(data);
	}

	async delete(id: number | string): Promise<U> {
		return this.repository.deleteOne(+id);
	}

	async getAll(): Promise<U[]> {
		const response = await this.repository.findAll();
		return this.hasClassTransformer(this.schemaItems, response);
	}

	async getById(id: number | string): Promise<U> {
		const response: any = await this.repository.findOne({ query: { id: +id } });
		return this.hasClassTransformer(this.schemaItem, response);
	}

	async update(id: number | string, data: T): Promise<U> {
		return this.repository.updateOne(+id, data);
	}
}
