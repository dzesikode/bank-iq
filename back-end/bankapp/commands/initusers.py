from django.conf import settings
from django.core.management.base import BaseCommand
from bankapp.models import CustomUser


class Command(BaseCommand):
    def handle(self, *args, **options):
        if CustomUser.objects.count() == 0:
            for username, role in settings.DEFAULT_USERS.items():
                print(f'Creating account for {username}, with role {role}')
                if role == 'USER':
                    user = CustomUser.objects.create_user(username=username, password='testpassword')
                    user.is_active = True
                    user.save()
                else:
                    admin = CustomUser.objects.create_superuser(username=username, password='admin')
                    admin.is_active = True
                    admin.is_admin = True
                    admin.save()
        else:
            print('Accounts already exist.')
