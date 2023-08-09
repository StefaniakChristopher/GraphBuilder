provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "netes" {
  name     = "netes"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "example" {
  name                = "my-aks-cluster"
  location            = azurerm_resource_group.netes.location
  resource_group_name = azurerm_resource_group.netes.name
  dns_prefix          = "graphbuilder"
  kubernetes_version  = "1.25.6"
  sku_tier = "Free"

  default_node_pool {
    name                = "default"
    node_count          = 1
    vm_size             = "Standard_B2s"
    os_disk_size_gb     = 30
    vnet_subnet_id      = azurerm_subnet.example.id
  }

  identity {
    type = "SystemAssigned"
  }

}

resource "azurerm_virtual_network" "example" {
  name                = "netes-vnet"
  address_space       = ["10.30.0.0/16"]
  location            = azurerm_resource_group.netes.location
  resource_group_name = azurerm_resource_group.netes.name
}

resource "azurerm_subnet" "example" {
  name                 = "netes-subnet"
  resource_group_name  = azurerm_resource_group.netes.name
  virtual_network_name = azurerm_virtual_network.example.name
  address_prefixes     = ["10.30.1.0/24"]
}