package Tech4Good_Group10.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty(value = "Nom_Activitat")
    private String typeBusiness;

    @JsonProperty(value = "Nom_Local")
    private String businessName;

    @JsonProperty(value = "Longitud")
    private String longitude;

    @JsonProperty(value = "Latitud")
    private String latitude;

}