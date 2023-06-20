package Tech4Good_Group10.service;

import Tech4Good_Group10.model.Business;
import Tech4Good_Group10.repository.BusinessRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceImpl implements AppService {

    private final BusinessRepository repository;

    /**
     * method to filter the business by the type of commerce
     * @param types the types of business
     * @return list of business
     */
    @Override
    public List<Business> getBusinessByType(List<String> types) {
        return repository.findAll().stream()
                .filter(business -> types.contains(business.getTypeBusiness()))
                .toList();
    }
}
