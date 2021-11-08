public with sharing class SFContractList {


    @AuraEnabled(cacheable = true)
    
    public static List<Contract> getListOfContracts(string strCat){
    
    strCat = strCat + '%';
    
    return [SELECT AccountId, Account.Name,Description ,Status ,StartDate, EndDate, ContractTerm FROM Contract where Account.Name like :strCat WITH SECURITY_ENFORCED ];
    
    }
    
    
    }