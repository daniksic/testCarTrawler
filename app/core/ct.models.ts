interface IVehAvilResponse{
	VehRentalCore:IVehRentalCore;
	VehVendorAvails:[IVehVendorAvails];
}

interface IVehRentalCore{
	PickUpDateTime:Date;
	ReturnDateTime:Date;
	PickUpLocation: IPickUpLocation;
	ReturnLocation: IReturnLocation;
}
interface IPickUpLocation{
	Name:string;
}
interface IReturnLocation{
	Name:string;
}


interface IVehVendorAvails{
	Vendor: IVendor;
	VehAvails:[IVehAvails];
}
interface IVendor{
	Code:string;
	Name:string;
}
interface IVehAvails{
	Status: string;
	Vehicle: IVehicle;
	TotalCharge:ITotalCharge;
}
interface IVehicle{
	AirConditionInd:boolean;
	TransmissionType:string;
	FuelType:string;
	DriveType:string;
	PassengerQuantity:string;
	BaggageQuantity:string;
	Code:string;
	CodeContext:string;
	DoorCount:number;
	VehMakeModel:IVehMakeModel;
	PictureURL:string;
}
interface IVehMakeModel{
	Name:string;
}
interface ITotalCharge{
	RateTotalAmount:number;
	EstimatedTotalAmount:number;
	CurrencyCode:string;
}
