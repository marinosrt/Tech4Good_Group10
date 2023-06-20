package Tech4Good_Group10.controller;
import Tech4Good_Group10.model.Business;
import Tech4Good_Group10.service.AppService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Model Controller")
public class Controller {
    private final AppService service;

    /**
     * Controller to get business filtered by the type of commerce
     * @param types the types of commerce
     * @return list of business
     */
    @PostMapping("/getBusinessByType")
    public List<Business> listBusiness(@RequestBody List<String> types) {
        return service.getBusinessByType(types);
    }
}