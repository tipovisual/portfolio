/**
 * db.js — Configuración centralizada de Supabase
 * Modifica SOLO este archivo para cambiar credenciales o agregar helpers.
 * Todos los demás archivos del sitio dependen de este.
 */

const { createClient } = supabase;

const db = createClient(
  'https://qhiflgztlcrbedmkhmmi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaWZsZ3p0bGNyYmVkbWtobW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4ODU5NDAsImV4cCI6MjA5MTQ2MTk0MH0.g3J-K-uTGnYUi8fwKlnz4A75aMQrj2rrujuqjWKPFw8'
);
