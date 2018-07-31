package nyh.study.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource( path = "todo")
public interface TodoItemRepository extends MongoRepository<TodoItem, String> {
}
