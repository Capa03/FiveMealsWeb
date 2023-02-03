export class OrderProduct {
    orderProductID: number = 0;
    orderId: number = 0;
    userEmail: string = '';
    orderedTime: string = '';
    productID: number = 0;
    productName: string = '';
    productPrice: number = 0;
    productMinAverageTime: number = 0;
    productMaxAverageTime: number = 0;
    imgLink: string = '';
    stepsMade: number = 0;
    maxSteps: number = 0;
    paid: boolean = false;
    delivered : boolean = false;
}