﻿




CREATE TABLE Сервер (
 primaryKey UUID NOT NULL,
 IP VARCHAR(255) NULL,
 Порт VARCHAR(255) NULL,
 Протокол VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетОСервере (
 primaryKey UUID NOT NULL,
 Режим VARCHAR(17) NULL,
 Расположение UUID NOT NULL,
 Сервер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 IdДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Программы (
 primaryKey UUID NOT NULL,
 Версия VARCHAR(255) NULL,
 ЕдИзмерения VARCHAR(5) NULL,
 Название VARCHAR(255) NULL,
 Описание VARCHAR(255) NULL,
 Размер VARCHAR(255) NULL,
 Сервер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Расположение (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 IdСотрудник INT NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Настройки (
 primaryKey UUID NOT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 Описание VARCHAR(255) NULL,
 ТипНастроек VARCHAR(9) NULL,
 Сервер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сервер ADD CONSTRAINT FK1233c272b6667b44b9cf19aac68dc8dd7fe30c88 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index1233c272b6667b44b9cf19aac68dc8dd7fe30c88 on Сервер (Сотрудник); 

 ALTER TABLE ОтчетОСервере ADD CONSTRAINT FKb33db21ab1f602e07439412d9641d5ad37e13521 FOREIGN KEY (Расположение) REFERENCES Расположение; 
CREATE INDEX Indexb33db21ab1f602e07439412d9641d5ad37e13521 on ОтчетОСервере (Расположение); 

 ALTER TABLE ОтчетОСервере ADD CONSTRAINT FK51323e9379486dab86e720cca5b37d397f63e559 FOREIGN KEY (Сервер) REFERENCES Сервер; 
CREATE INDEX Index51323e9379486dab86e720cca5b37d397f63e559 on ОтчетОСервере (Сервер); 

 ALTER TABLE Программы ADD CONSTRAINT FKe4461bb1113e3e2441873c1d181446e30b031f9b FOREIGN KEY (Сервер) REFERENCES Сервер; 
CREATE INDEX Indexe4461bb1113e3e2441873c1d181446e30b031f9b on Программы (Сервер); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FK52e78a286299ec0faa67b4f751a6cda2dec1a57a FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index52e78a286299ec0faa67b4f751a6cda2dec1a57a on Сотрудник (Должность); 

 ALTER TABLE Настройки ADD CONSTRAINT FKd5d176e427f76a9e7122dc9a4cff2a65ca579407 FOREIGN KEY (Сервер) REFERENCES Сервер; 
CREATE INDEX Indexd5d176e427f76a9e7122dc9a4cff2a65ca579407 on Настройки (Сервер); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

