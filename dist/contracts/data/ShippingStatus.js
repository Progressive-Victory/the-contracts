import z from 'zod';
export var ShippingStatus;
(function (ShippingStatus) {
    ShippingStatus["NOT_SHIPPED"] = "not_shipped";
    ShippingStatus["SHIPPED"] = "shipped";
})(ShippingStatus || (ShippingStatus = {}));
export const zShippingStatus = z.enum(ShippingStatus);
//# sourceMappingURL=ShippingStatus.js.map