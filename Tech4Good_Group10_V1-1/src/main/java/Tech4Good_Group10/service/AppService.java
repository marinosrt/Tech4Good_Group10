package Tech4Good_Group10.service;

import Tech4Good_Group10.model.Business;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AppService {
    List<Business> getBusinessByType(List<String> types);
}
