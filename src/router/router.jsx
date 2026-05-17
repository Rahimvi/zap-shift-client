import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayouts from "../layouts/RootLayouts";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import AssignedDeliveries from "../pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import Home from "../pages/Home/Home/Home";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import RiderRoute from "./RiderRoute";

// eslint-disable-next-line react-refresh/only-export-components
const Loading = () => (
  <div className="text-center mt-20 text-2xl">
    <span className="loading loading-infinity loading-xl"></span>
  </div>
);

export const router = createBrowserRouter([
  // Root layout
  {
    path: "/",
    Component: RootLayouts,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        element: <Coverage />,
        loader: async () => {
          const response = await fetch("/warehouses.json");
          if (!response.ok) {
            throw new Error("Data not found");
          }
          return response.json();
        },
      },
      {
        path: "parcel-track/:trackingId",
        element: <ParcelTrack />,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch("/warehouses.json");
          if (!response.ok) {
            throw new Error("Data not found");
          }
          return response.json();
        },
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        // Loader function: path ekebare simple rakho
        loader: async () => {
          const response = await fetch("/warehouses.json");
          if (!response.ok) {
            throw new Error("Data not found");
          }
          return response.json();
        },
      },
    ],
  },
  // Auth Layout
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  // Dashboard Layout
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "my-parcels",
        element: <MyParcels />,
      },
      {
        path: "payment/:parcelId",
        element: <Payment />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-cancelled",
        element: <PaymentCancelled />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "assigned-deliveries",
        element: (
          <RiderRoute>
            <AssignedDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderRoute>
            <CompletedDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminRoute>
            <AssignRiders />
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },
    ],
  },
]);
