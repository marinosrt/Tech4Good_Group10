package Tech4Good_Group10.helpers;

import Tech4Good_Group10.model.Business;
import Tech4Good_Group10.repository.BusinessRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.util.List;

@Component
public class FileLoader implements CommandLineRunner {

    private BusinessRepository repository;
    @Autowired
    public FileLoader(BusinessRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        String pathFile = "src/main/resources/jsons/censo-abridged-1.json";
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            File file = new File(pathFile);

            Business[] objects = objectMapper.readValue(file, Business[].class);

            for (Business business : objects) {
                repository.save(business);
            }



        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
