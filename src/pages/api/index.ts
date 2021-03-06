/*
 * @Author: your name
 * @Date: 2021-03-10 13:59:47
 * @LastEditTime: 2021-03-23 17:01:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fudi/src/pages/api/index.ts
 */
export const apiPath = {
    "regist": "/auth/register/v2",//regist     一期✔️
    "login": "/auth/login",//login     一期✔️
    "phoneVerificationCode": "/auth/register/phone/verification",//注册获取验手机证码     一期✔️
    "emailVerificationCode": "/user/forget/password/email/verification",// Send email forgot password     一期✔️
    "resetPwd": "/user/forget/password",// Reset password     一期✔️
    "saveAddress": "/user/shipping_address/save",//save address     一期
    "addressList": "/user/shipping_address/list",//address list     一期
    "mapRange": "/shop/range/label/list/v2",//map range
    "shopList": "/shop/list/v2/collection",//shop(restaurant) list
    "shopDetail": "/shop/detail/v2",//shop(restaurant) detail
    "categoriesInHomePages": "/goods/classify/list/first/v2",//categories in home page
    "foodPage": "/goods/classify/list/first/v2",// discounted / hot sale / new food page
    "categoriesInFoodList": "/goods/list/v2",// Food list for other categories
    "foodDetail": "/goods/detail/v2",// food details

    "sendSuggestions": "/user/feedback/save",// Send Suggestions     一期✔️
    "personalCenterInfo": "/user/my",// Info on Setting page     一期
    "gets3UploadKey": "/auth/aws/sts/s3/put",// Get keys for S3(only used when uploading user icon)     一期
    "personalCenterUpdatePhone": "/user/update/phone/v2",// Update phone number     一期     
    "personalCenterUpdateIcon": "/user/update/head",//Update user icon     一期
    "personalCenterUpdatePassword": "/user/update/password",//Update Password     一期

    // "personalCenterCouponList": "/coupon/list/v2",//Get coupon list     一期
    "personalCenterCouponList": "/coupon/list/received",//Get coupon list     一期
    "personalCenterObtainCoupon": "/user/coupon/obtain/v2",//Obtain the coupon code from the text field     一期
    "personalCenterUsableCoupon": "/user/coupon/usable",// return the useable coupon     一期
    "personalCenterInvalidCoupon": "/user/coupon/invalid",// Return the expired coupon     一期

    "personalCenterInvitation": "/user/invitation",// Return if this user's invitation status     一期
    "personalCenterUpdateNickname": "/user/update/nickname",// Update user name     一期     
    "personalCenterOrderList": "/user/order/list/v2",// return the order list     一期
    "shopServicePhone": "/shop/custom_service_phone",// Get customer service phone number     一期
    "thirdPartyLogin": "/auth/login/third_party",// Third party login     一期     
    "FAQList": "/faq/list",// FAQ     一期✔️
    "personalCenterUpdateEmail": "/user/update/email",// Update email     一期      
}