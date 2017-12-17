package springboot2.model;

import javax.persistence.*;

@Entity
@Table(name = "SHIPWRECK")
public class Shipwreck {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME") // Not necessary
    private String name;

    @Column
    private String description;

    @Column
    private String condition;

    @Column
    private Integer depth;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    private Integer yearDiscovered;

    public Shipwreck() {
    }

    public Shipwreck(long id, String name, String description, String condition, Integer depth, Double latitude, Double longitude, Integer yearDiscovered) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.condition = condition;
        this.depth = depth;
        this.latitude = latitude;
        this.longitude = longitude;
        this.yearDiscovered = yearDiscovered;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public Integer getDepth() {
        return depth;
    }

    public void setDepth(Integer depth) {
        this.depth = depth;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Integer getYearDiscovered() {
        return yearDiscovered;
    }

    public void setYearDiscovered(Integer yearDiscovered) {
        this.yearDiscovered = yearDiscovered;
    }
}