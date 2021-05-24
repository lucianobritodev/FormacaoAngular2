import Swal, { SweetAlertResult } from 'sweetalert2';

export class Mensagens {
  // tslint:disable-next-line: typedef
  async alertConfirm(confirm: string) {
    let res: any;
    await Swal.fire({
      title: 'Você tem certeza?',
      text: confirm,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        res = true;
        Swal.fire(
          'Alterado!',
          'Status da tarefa alterado com sucesso!',
          'success'
        );
      } else {
        res = false;
      }
    });
    return res;
  }

  public alertError(error: string): Promise<SweetAlertResult<any>> {
    const result = Swal.fire(
      'Erro!',
      error,
      'error');
    return result;
  }

  public alertDone(message: any): any {
    const result = Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    return result;
  }


  // tslint:disable-next-line: typedef
  async alertYesNo(message: string) {
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
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Tarefa excluida com sucesso!',
          'success'
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        res = false;
        swalWithBootstrapButtons.fire(
          'Cancelado!',
          'Sua tarefa ainda permanece no sistema! :)',
          'error'
        );
      }
    });
    return res;
  }
}

export default Mensagens;
