package springboot2.controller;

import springboot2.model.Shipwreck;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShipwreckStub {
    private static Map<Long, Shipwreck> shipwreckMap = new HashMap<Long, Shipwreck>();
    private static long idIndex = 3L;

    static {
        Shipwreck a = new Shipwreck(1L, "U869", "A very deep German UBoat", "FAIR", 200, 44.12, 138.44, 1994);
        shipwreckMap.put(1L, a);
        Shipwreck b = new Shipwreck(2L, "Thistlegorm", "British merchant boat in the Red Sea", "GOOD", 80, 44.12, 138.44, 1994);
        shipwreckMap.put(2L, b);
        Shipwreck c = new Shipwreck(3L, "S.S. Yongala", "A luxury passenger ship wrecked on the great barrier reef", "FAIR", 50, 44.12, 138.44, 1994);
        shipwreckMap.put(3L, c);
    }

    public static List<Shipwreck> list(){
        return new ArrayList<Shipwreck>(shipwreckMap.values());
    }

    public static Shipwreck create(Shipwreck shipwreck){
        idIndex += idIndex;
        shipwreck.setId(idIndex);
        shipwreckMap.put(idIndex, shipwreck);
        return shipwreck;
    }

    public static Shipwreck get(long id) {
        return shipwreckMap.get(id);
    }

    public static Shipwreck update(long id, Shipwreck wreck) {
        shipwreckMap.put(id, wreck);
        return wreck;
    }

    public static Shipwreck delete(long id) {
        return shipwreckMap.remove(id);
    }
}
