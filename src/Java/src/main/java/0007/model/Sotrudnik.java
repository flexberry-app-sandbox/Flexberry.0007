package 0007.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 0007.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IIS0007Сотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IdСотрудник")
    private Integer idсотрудник;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Отчество")
    private String отчество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIdСотрудник() {
      return idсотрудник;
    }

    public void setIdСотрудник(Integer idсотрудник) {
      this.idсотрудник = idсотрудник;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }


}