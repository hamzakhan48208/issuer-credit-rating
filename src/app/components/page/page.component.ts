import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})

export class PageComponent implements OnInit{
  records = [
    {
      "Id": 1,
      "IssuerPriceProvider": "BARCLAYS",
      "IssuerName": "Barclays Bank PLC",
      "MoodysRating": "A1",
      "SPRating": "A",
      "FitchRating": "",
      "Guarantor": "Barclays Bank PLC",
      "CalcAgent": "Barclays Bank PLC",
      "CreatedAt": "31-Oct-2019 11:36:56 PM",
      "CreatedBy": "Amruta_12345",
      "UpdatedAt": "20-Oct-2023 12:53:53 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 2,
      "IssuerPriceProvider": "BNPP",
      "IssuerName": "BNP Paribas",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "BNP Paribas",
      "CalcAgent": "BNP Paribas",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 10:42:17 AM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 3,
      "IssuerPriceProvider": "CITI",
      "IssuerName": "Citigroup Global Markets Funding Luxembourg S.C.A.",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Citigroup Global Markets Limited",
      "CalcAgent": "Citigroup Global Markets Limited",
      "CreatedAt": "11-Apr-2018 12:48:54 PM",
      "CreatedBy": "Nishant",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 4,
      "IssuerPriceProvider": "CS",
      "IssuerName": "Credit Suisse International",
      "MoodysRating": "A3",
      "SPRating": "A-",
      "FitchRating": "",
      "Guarantor": "Credit Suisse International",
      "CalcAgent": "Credit Suisse International",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 5,
      "IssuerPriceProvider": "DB",
      "IssuerName": "DB",
      "MoodysRating": "A3",
      "SPRating": "BBB+",
      "FitchRating": "",
      "Guarantor": "Deutsche Bank AG London Branch",
      "CalcAgent": "Deutsche Bank AG London Branch",
      "CreatedAt": "18-Jan-2017 11:48:05 AM",
      "CreatedBy": "11986986PS",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 6,
      "IssuerPriceProvider": "DB",
      "IssuerName": "DB",
      "MoodysRating": "A3",
      "SPRating": "BBB+",
      "FitchRating": "",
      "Guarantor": "Deutsche Bank AG London Branch",
      "CalcAgent": "Deutsche Bank AG London Branch",
      "CreatedAt": "11-Sep-2017 9:55:22 PM",
      "CreatedBy": "1291530PS",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 7,
      "IssuerPriceProvider": "GS",
      "IssuerName": "Goldman Sachs International, London, UK",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Goldman Sachs International, London, UK",
      "CalcAgent": "Goldman Sachs International, London, UK",
      "CreatedAt": "13-Nov-2019 5:49:55 PM",
      "CreatedBy": "SYSTEM",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 8,
      "IssuerPriceProvider": "HSBC",
      "IssuerName": "HSBC Bank PLC",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "HSBC Bank PLC",
      "CalcAgent": "HSBC Bank PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 9,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 10,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 11,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 12,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 13,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 14,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 15,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 16,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 17,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 18,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 19,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 20,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 21,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 22,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 23,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 24,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 25,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 26,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 27,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 28,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 29,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 30,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 31,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 32,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 33,
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "Id": 34,
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "Id": 35,
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
  ]


  issuerProviderOptions = ["HSBC", "JPM", "UBS", "CS", "BNPP", "CITI", "DB", "LEONTEEQ", "RBC", "NATIXIS", "SOCGEN", "GS", "HTTPLINKUSER", "TDS", "MS", "MSEUROPE", "UKJPM", "BARCLAYS", "BVMS", "NOMURA", "UKJPMBV"];
  moddysRatingOptions = ["Baa2", "Aaa", "Aa1", "Aa2", "Aa3", "A1", "A2", "A3", "Baa1", "Baa3", "Ba1", "Ba2", "Ba3", "B1", "B2", "B3"];
  spRatingOptions = ["AAA", "AA+", "AA", "AA-", "A+", "A", "A-", "BBB+", "BBB", "BBB-", "BB+", "BB", "BB-", "B+", "B", "B-"];
  fitchRatingOptions = ["AAA", "AA+", "AA", "AA-", "A+", "A", "A-", "BBB+", "BBB", "BBB-", "BB+", "BB", "BB-", "B+", "B", "B-"];

  selectedIssuerProvider: string;
  newIssuerName: string;
  selectedMoodysRating: string;
  selectedSpRating: string;
  selectedFitchRating: string;
  newGuarantor: string;
  newCalcAgent: string;
  createdAt: string;
  createdBy: string;
  Id: number;

  isEdit: boolean = false;
  editNumber: Number = -1;
  addPressed: boolean = false;

  //save loading
  isSaving: boolean = false;


  // issuerPriceFilter: boolean = false;
  // issuerNameFilter: boolean = false;
  // moodysRatingFilter: boolean = false;
  // sAndPRatingFilter: boolean = false;
  // fitchRatingFilter: boolean = false;
  // guarantorFilter: boolean = false;
  // calcAgentFilter: boolean = false;
  // createdAtFilter: boolean = false;
  // createdByFilter: boolean = false;
  // updatedAtFilter: boolean = false;
  // updatedByFilter: boolean = false;
  //FILTERS
  filterState: string = 'none';
  filterMap = new Map([
    ["issuerPriceFilter", "IssuerPriceProvider"],
    ["issuerNameFilter", "IssuerName"],
    ["moodysRatingFilter", "MoodysRating"],
    ["sAndPRatingFilter", "SPRating"],
    ["fitchRatingFilter", "FitchRating"],
    ["guarantorFilter", "Guarantor"],
    ["calcAgentFilter", "CalcAgent"],
    ["createdAtFilter", "CreatedAt"],
    ["createdByFilter", "CreatedBy"],
    ["updatedAtFilter", "UpdatedAt"],
    ["updatedByFilter", "UpdatedBy"],
  ]);
  filterSearch: string;


  //PAGINATION
  recordsFiltered = this.records;
  recordsArr = [5, 10, 25, 100];
  totalRecords = this.records.length;
  first = 0;
  last = Math.min(this.records.length, 10);
  size = 10;

  ngOnInit(): void {
    this.totalRecords = this.records.length;
    this.updateRecordsFiltered();
  }

  onRecordsLengthChanged() {
    this.last = this.first + Number(this.size);
    this.updateRecordsFiltered();
  }

  next() {
    const nextFirst = this.last;
    const nextLast = Math.min(this.last + Number(this.size), this.totalRecords);

    if (nextFirst >= this.totalRecords) {
      return; // Prevent going beyond total records
    }

    this.first = nextFirst;
    this.last = nextLast;
    this.updateRecordsFiltered();
  }

  prev() {
    const nextLast = this.first;
    const nextFirst = Math.max(this.first - Number(this.size), 0);

    if (nextFirst < 0 || nextLast == 0) {
      return; // Prevent going below zero
    }

    this.first = nextFirst;
    this.last = nextLast;
    this.updateRecordsFiltered();
  }

  updateRecordsFiltered() {
    this.recordsFiltered = this.records.slice(this.first, this.last);
  }

  //EDIT
  toggleEdit(i: Number, record){
    //only if add is not pressed
    if(!this.addPressed){
      this.editNumber = i === this.editNumber ? -1 : i;
      //Edit (not Cancel)
      if(this.isEdit === false){
        this.selectedIssuerProvider = record.IssuerPriceProvider;
        this.newIssuerName = record.IssuerName;
        this.selectedMoodysRating = record.MoodysRating;
        this.selectedSpRating = record.SPRating;
        this.selectedFitchRating = record.FitchRating;
        this.newGuarantor = record.Guarantor;
        this.newCalcAgent = record.CalcAgent;
        this.createdAt = record.CreatedAt;
        this.createdBy = record.CreatedBy;
        this.Id = record.Id;
      }
      this.isEdit = !this.isEdit;
    }
  }
  addRecord(){
    this.addPressed = true;
    this.isEdit = true;

    //make default records
    this.selectedIssuerProvider = 'HSBC';
    this.newIssuerName = '';
    this.selectedMoodysRating = 'Baa2';
    this.selectedSpRating = 'AAA';
    this.selectedFitchRating = 'AAA';
    this.newGuarantor = '';
    this.newCalcAgent = '';

  }
  cancelAdd(){
    this.addPressed = false;
    this.isEdit = false;
  }

  saveRecord(){
    //add new record
    if(this.addPressed){
      let newRecord = {
        "Id": this.records.length,
        "IssuerPriceProvider": this.selectedIssuerProvider,
        "IssuerName": this.newIssuerName,
        "MoodysRating": this.selectedMoodysRating,
        "SPRating": this.selectedSpRating,
        "FitchRating": this.selectedFitchRating,
        "Guarantor": this.newGuarantor,
        "CalcAgent": this.newCalcAgent,
        "CreatedAt": this.getFormattedDateTime(),
        "CreatedBy": "Test User",  //Actual user name
        "UpdatedAt": "",
        "UpdatedBy": ""
      }
      //add into db here

      //add record
      this.records.unshift(newRecord);
      this.totalRecords = this.totalRecords + 1;
      //to update the list
      this.updateRecordsFiltered();

      //reset add
      this.cancelAdd();
    }
    else{
      //edit record
      let editRecord = {
        "Id": this.Id,
        "IssuerPriceProvider": this.selectedIssuerProvider,
        "IssuerName": this.newIssuerName,
        "MoodysRating": this.selectedMoodysRating,
        "SPRating": this.selectedSpRating,
        "FitchRating": this.selectedFitchRating,
        "Guarantor": this.newGuarantor,
        "CalcAgent": this.newCalcAgent,
        "CreatedAt": this.createdAt,
        "CreatedBy": this.createdBy,  //Actual user name
        "UpdatedAt": this.getFormattedDateTime(),
        "UpdatedBy": "Test User"
      }

      //edit in the db here

      //edit record
      // Update records array based on the Id
      this.records = this.records.map(record => {
        if (record.Id === editRecord.Id) {
            return { ...record, ...editRecord };
        }
        return record;
      });
      //reset edit
      this.isEdit = false;
      this.editNumber = -1;

      //update records
      this.updateRecordsFiltered();
    }
  }

  //FILTERS
  close: boolean = false;
  showFilter(selectedFilter){
    console.log(selectedFilter);
    //toggle
    // if(this.filterState === selectedFilter){
    //   this.filterState = 'none';
    // }
    // else{
    //   this.filterState = selectedFilter;
    // }
    if(this.close === true){
      this.filterState = 'none';
      this.close = false;
    }
    else{
      this.filterState = selectedFilter;
    }

  }
  closeFilter(){
    this.close = true;
  }

  sortByAscending(){
    if(this.filterState !== 'none'){
      this.sortAscendingHelper(this.filterMap.get(this.filterState));
      this.updateRecordsFiltered();
    }
  }
  sortByDescending(){
    if(this.filterState !== 'none'){
      this.sortDescendingHelper(this.filterMap.get(this.filterState));
      this.updateRecordsFiltered();
    }
  }
  searchDataUsingFilter(){
    if(this.filterState !== 'none'){
      //search
      console.log(this.filterSearch);
      this.recordsFiltered = this.filterRecordsHelper(this.filterMap.get(this.filterState), this.filterSearch);
      console.log(this.recordsFiltered);
      this.first = 0;
      this.last = Math.min(10, this.recordsFiltered.length);
      this.recordsFiltered = this.recordsFiltered.slice(this.first, this.last);

      this.filterState = 'none';
    }
  }
  clearFilter(){
    this.first = 0;
    this.last = Math.min(this.records.length, 10);
    this.updateRecordsFiltered();

    this.filterState = 'none';
    this.closeFilter();
  }


  //UTILS
  getFormattedDateTime() {
    const currentDate = new Date();

    // Get date components
    const day = currentDate.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Get time components
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format the date and time
    const formattedDateTime = `${day}-${monthNames[monthIndex]}-${year} ${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;

    return formattedDateTime;
  }

  sortAscendingHelper(fieldName) {
    this.records.sort((a, b) => {
      const valueA = a[fieldName].toUpperCase();
      const valueB = b[fieldName].toUpperCase();

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }
  sortDescendingHelper(fieldName) {
    this.records.sort((a, b) => {
      const valueA = a[fieldName].toUpperCase();
      const valueB = b[fieldName].toUpperCase();

      if (valueA > valueB) {
        return -1;
      }
      if (valueA < valueB) {
        return 1;
      }
      return 0;
    });
  }

  filterRecordsHelper(field, searchString) {
    // Convert searchString to lowercase for case-insensitive search
    const searchStr = searchString.toLowerCase();

    return this.records.filter(record => {
      // Convert the field value to lowercase for case-insensitive search
      const fieldValue = record[field].toLowerCase();

      // Check if the fieldValue contains the search string
      return fieldValue.includes(searchStr);
    });
  }



}
