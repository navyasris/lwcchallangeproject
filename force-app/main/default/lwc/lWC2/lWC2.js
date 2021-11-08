import { LightningElement,wire } from 'lwc';
import fetchListOfContracts from '@salesforce/apex/SFContractList.getListOfContracts';
export default class AccounToContract extends LightningElement {
fetchContracts_method;
searchForContract(){
this.topicCategoryinput =this.template.querySelector('lightning-input').value;
fetchListOfContracts({strCat : this.topicCategoryinput })
.then((result)=>{this.fetchContracts_method = result})
.catch((error)=>{this.error = error})
}
}