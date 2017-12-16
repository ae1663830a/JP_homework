package springboot.booking.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import springboot.booking.data.entity.Room;

@Repository
public interface RoomRepository extends CrudRepository<Room, Long> {
    Room findByNumber(int number);
}