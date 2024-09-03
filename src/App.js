import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { BarChart3, Box, FileText, Menu, MessageSquare, PieChart, Search, Settings, Users, Anchor, Truck, Ship, Clipboard } from 'lucide-react'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedEdiType, setSelectedEdiType] = useState("ANSI X12 315")

  const ediTypes = [
    { type: "ANSI X12 315", role: "Ocean Shipment Status", post: "Vessel Tracking" },
    { type: "ANSI X12 301", role: "Confirmation for Booking", post: "Booking Desk" },
    { type: "ANSI X12 309", role: "Customs Manifest", post: "Customs Office" },
    { type: "ANSI X12 310",