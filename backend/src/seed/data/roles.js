module.exports = [
  {
    name: "SUPER_ADMIN",
    permissions: [
      "LOGIN",

      "CREATE_COMPANY",
      "VIEW_COMPANY",
      "UPDATE_COMPANY",
      "ACTIVATE_COMPANY",
      "DEACTIVATE_COMPANY",

      "CREATE_USER",
      "VIEW_USER",
      "UPDATE_USER",
      "ACTIVATE_USER",
      "DEACTIVATE_USER",
      "RESET_USER_PASSWORD",
      "ASSIGN_USER_ROLE",

      "VIEW_REPORTS",
      "EXPORT_REPORTS",
    ],
  },

  {
    name: "COMPANY_ADMIN",
    permissions: [
      "LOGIN",

      "CREATE_USER",
      "VIEW_USER",
      "UPDATE_USER",
      "ACTIVATE_USER",
      "DEACTIVATE_USER",
      "RESET_USER_PASSWORD",

      "CREATE_ROLE",
      "VIEW_ROLE",
      "UPDATE_ROLE",
      "DELETE_ROLE",
      "ASSIGN_PERMISSIONS_TO_ROLE",
      "REMOVE_PERMISSIONS_FROM_ROLE",

      "VIEW_REPORTS",
      "EXPORT_REPORTS",
    ],
  },

  {
    name: "PROCUREMENT_MANAGER",
    permissions: [
      "LOGIN",

      "CREATE_PURCHASE_REQUEST",
      "VIEW_PURCHASE_REQUEST",
      "UPDATE_PURCHASE_REQUEST",
      "SUBMIT_PURCHASE_REQUEST",
      "APPROVE_PURCHASE_REQUEST",
      "REJECT_PURCHASE_REQUEST",

      "CREATE_PURCHASE_ORDER",
      "VIEW_PURCHASE_ORDER",
      "UPDATE_PURCHASE_ORDER",
      "SEND_PURCHASE_ORDER",
      "CANCEL_PURCHASE_ORDER",
    ],
  },

  {
    name: "PROCUREMENT_EMPLOYEE",
    permissions: [
      "LOGIN",

      "CREATE_PURCHASE_REQUEST",
      "VIEW_PURCHASE_REQUEST",
      "UPDATE_PURCHASE_REQUEST",
      "SUBMIT_PURCHASE_REQUEST",

      "VIEW_PURCHASE_ORDER",
    ],
  },

  {
    name: "WAREHOUSE_MANAGER",
    permissions: [
      "LOGIN",

      "CREATE_WAREHOUSE",
      "VIEW_WAREHOUSE",
      "UPDATE_WAREHOUSE",
      "ACTIVATE_WAREHOUSE",
      "DEACTIVATE_WAREHOUSE",

      "RECEIVE_STOCK",
      "ISSUE_STOCK",

      "CREATE_STOCK_TRANSFER",
      "VIEW_STOCK_TRANSFER",
      "APPROVE_STOCK_TRANSFER",
      "REJECT_STOCK_TRANSFER",
      "COMPLETE_STOCK_TRANSFER",
    ],
  },

  {
    name: "WAREHOUSE_EMPLOYEE",
    permissions: [
      "LOGIN",

      "VIEW_WAREHOUSE",

      "RECEIVE_STOCK",
      "ISSUE_STOCK",

      "VIEW_STOCK_TRANSFER",
    ],
  },

  {
    name: "INVENTORY_MANAGER",
    permissions: [
      "LOGIN",

      "VIEW_INVENTORY",
      "VIEW_STOCK",
      "ADJUST_STOCK",
      "COUNT_STOCK",
      "VIEW_STOCK_MOVEMENTS",

      "VIEW_REPORTS",
    ],
  },

  {
    name: "INVENTORY_EMPLOYEE",
    permissions: [
      "LOGIN",

      "VIEW_INVENTORY",
      "VIEW_STOCK",

      "RECEIVE_STOCK",
      "ISSUE_STOCK",

      "VIEW_STOCK_MOVEMENTS",
    ],
  },

  {
    name: "VIEWER",
    permissions: [
      "LOGIN",

      "VIEW_PRODUCT",
      "VIEW_CATEGORY",
      "VIEW_SUPPLIER",
      "VIEW_WAREHOUSE",
      "VIEW_INVENTORY",
      "VIEW_STOCK",
      "VIEW_PURCHASE_REQUEST",
      "VIEW_PURCHASE_ORDER",
      "VIEW_SHIPMENT",

      "VIEW_REPORTS",
    ],
  },
];