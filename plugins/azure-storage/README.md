# Azure Storage

Welcome to the `AzureStorage` plugin!

## Getting started

### Installation

This plugin needs to be added to an existing backstage instance.

```bash
# From your Backstage root directory
yarn add --cwd packages/app backstage-plugin-azure-storage
```

### Configure Route

Add the following lines in `packages/app/src/App.tsx` to create new route

```typescript
import { AzureStoragePage } from 'backstage-plugin-azure-storage';

const routes = (
  <FlatRoutes>
    {/* ...other routes */}
    <Route path="/azure-storage" element={<AzureStoragePage />} />
    {/* ...other routes */}
  </FlatRoutes>
);
```

### Configure SideBar

Add the following line in `packages/app/src/components/Root/Root.tsx` to create a new element in the Sidebar

```typescript
import FolderIcon from '@material-ui/icons/Folder';

<SidebarPage>
  {/* ...other contents */}
  <SidebarItem
    icon={FolderIcon}
    to="azure-storage"
    text="Azure Storage Explorer"
  />
  {/* ...other contents */}
</SidebarPage>;
```

### AzureStorage Backend

You need to install the [AzureStorage backend plugin](https://github.com/deepan10/backstage-plugin-blackduck-backend) and configure the `app-config.yml` with your Azure Storage Account details to explore it in `Backstage portal`.
