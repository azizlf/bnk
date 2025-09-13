import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  historys = [

    {
      date: "09/10/2025",
      libelle: "Transfert vers Shayma Ghuidhaoui",
      montant: 348800,
      status: 1
    },
    {
      date: "12/07/2025",
      libelle: "Investissement au projet X",
      montant: 40000,
      status: 3
    },
    {
      date: "11/07/2025",
      libelle: "Transfert du Aymen Ayari",
      montant: 1200,
      status: 2
    },
    {
      date: "30/08/2024",
      libelle: "Retrait",
      montant: 20000,
      status: 1
    },
    {
      date: "04/08/2023",
      libelle: "Paiement Facture ( Steg ) ",
      montant: 500,
      status: 0
    }

  ]

  downloadFile() {
    const header = Object.keys(this.historys[0]).join(",") + "\n";
    const rows = this.historys.map(h => `${h.date},${h.libelle},${h.montant},${h.status}`).join("\n");
    const csv = header + rows;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "historiques.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
