/**
 * 
 */
package com.work.kbkd.server.entity;

import java.util.ArrayList;
import java.util.Date;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


/**
 * @author ambar
 *
 */
@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Customer {
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Long id;

    @Persistent
    private String firstName;

    @Persistent
    private String lastName;
    
    @Persistent
    private String emailId;
    
    @Persistent
    private String phoneNumber;
    
    @Persistent
    private String password;

    @Persistent
    private Date createdOn;

    public Customer(String firstName, String lastName, Date createdOn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdOn = createdOn;
        
       
    }

    // Accessors for the fields.  JDO doesn't use these, but your application does.

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    } 
	

}
