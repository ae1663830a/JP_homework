package springboot2;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import springboot2.controller.ShipwreckController;
import springboot2.model.Shipwreck;
import springboot2.repository.ShipwreckRepository;


import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
//import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class ShipwreckControllerTest {

    @InjectMocks
    private ShipwreckController shipwreckController;

    @Mock
    private ShipwreckRepository shipwreckRepository;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testShipwreckController() {
        Shipwreck shipwreck = new Shipwreck();
        shipwreck.setId(1L);
        when(shipwreckRepository.findOne(1L)).thenReturn(shipwreck);

        Shipwreck shipwreck1 = shipwreckController.get(1L);
//        assertEquals(1L, shipwreck1.getId());
        assertThat(shipwreck1.getId(), is(1L));
    }
}