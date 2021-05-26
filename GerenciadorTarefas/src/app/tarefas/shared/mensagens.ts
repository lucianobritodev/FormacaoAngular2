import { ValueSansProvider } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

export class Mensagens {
  // tslint:disable-next-line: typedef
  async alertConfirm(question: string, nome: string) {
    let res: any;
    await Swal.fire({
      title: 'Você tem certeza?',
      text: question,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Não, cancelar!',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
        res = true;
        this.alertDone(`Status da tarefa ${nome} foi alterado com sucesso!`);
      } else {
        res = false;
        this.alertError(`O status da tarefa ${nome} não foi alterado!`);
      }
    });
    return res;
  }

  public alertError(error: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'error',
      title: error
    });
  }

  public alertDone(message: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: message
    });
  }


  // tslint:disable-next-line: typedef
  async alertYesNo(message: string, nome: string) {
    let res: any;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    await swalWithBootstrapButtons.fire({
      title: 'Você tem certeza?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, pode excluir!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        res = true;
        this.alertDone(`Tarefa ${nome} excluida com sucesso!`);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        res = false;
        this.alertError(`Sua tarefa ${nome} ainda permanece no sistema! :)`);
      }
    });
    return res;
  }
}

export default Mensagens;
