# Generated by Django 4.2 on 2025-06-01 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('category', models.CharField(blank=True, choices=[('Technology', 'Technology'), ('Lifestyle', 'Lifestyle'), ('Health', 'Health'), ('Travel', 'Travel')], default='Technology', max_length=10, null=True)),
                ('content', models.TextField()),
            ],
        ),
    ]
