enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

type User = {
    username: string;
    role: ROLES;
}

const vicoUser: User = {
    username: 'VicoMaster',
    role: ROLES.ADMIN
}