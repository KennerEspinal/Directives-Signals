import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styles: ``
})
export class UserInfoPageComponent implements OnInit {

  private uS = inject(UserService);

  userId = signal(1);

  currentUser = signal<User | undefined>(undefined);
  userWasFound = signal(true);
  fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.uS.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }
      });
  }
}
