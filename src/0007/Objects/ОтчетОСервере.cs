﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.0007
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отчет о сервере.
    /// </summary>
    // *** Start programmer edit section *** (ОтчетОСервере CustomAttributes)

    // *** End programmer edit section *** (ОтчетОСервере CustomAttributes)
    [AutoAltered()]
    [Caption("Отчет о сервере")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтчетОСервереE", new string[] {
            "Режим as \'Режим\'",
            "Расположение as \'Расположение\'",
            "Расположение.Адрес as \'Адрес\'",
            "Сервер as \'Сервер\'",
            "Сервер.IP as \'IP\'"}, Hidden=new string[] {
            "Расположение.Адрес",
            "Сервер.IP"})]
    [MasterViewDefineAttribute("ОтчетОСервереE", "Расположение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Адрес")]
    [MasterViewDefineAttribute("ОтчетОСервереE", "Сервер", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "IP")]
    [View("ОтчетОСервереL", new string[] {
            "Режим as \'Режим\'",
            "Расположение.Адрес as \'Адрес\'",
            "Сервер.IP as \'IP\'"})]
    public class ОтчетОСервере : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.0007.РежимСервера fРежим;
        
        private IIS.0007.Расположение fРасположение;
        
        private IIS.0007.Сервер fСервер;
        
        // *** Start programmer edit section *** (ОтчетОСервере CustomMembers)

        // *** End programmer edit section *** (ОтчетОСервере CustomMembers)

        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОСервере.Режим CustomAttributes)

        // *** End programmer edit section *** (ОтчетОСервере.Режим CustomAttributes)
        public virtual IIS.0007.РежимСервера Режим
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Режим Get start)

                // *** End programmer edit section *** (ОтчетОСервере.Режим Get start)
                IIS.0007.РежимСервера result = this.fРежим;
                // *** Start programmer edit section *** (ОтчетОСервере.Режим Get end)

                // *** End programmer edit section *** (ОтчетОСервере.Режим Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Режим Set start)

                // *** End programmer edit section *** (ОтчетОСервере.Режим Set start)
                this.fРежим = value;
                // *** Start programmer edit section *** (ОтчетОСервере.Режим Set end)

                // *** End programmer edit section *** (ОтчетОСервере.Режим Set end)
            }
        }
        
        /// <summary>
        /// Отчет о сервере.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОСервере.Расположение CustomAttributes)

        // *** End programmer edit section *** (ОтчетОСервере.Расположение CustomAttributes)
        [PropertyStorage(new string[] {
                "Расположение"})]
        [NotNull()]
        public virtual IIS.0007.Расположение Расположение
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Расположение Get start)

                // *** End programmer edit section *** (ОтчетОСервере.Расположение Get start)
                IIS.0007.Расположение result = this.fРасположение;
                // *** Start programmer edit section *** (ОтчетОСервере.Расположение Get end)

                // *** End programmer edit section *** (ОтчетОСервере.Расположение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Расположение Set start)

                // *** End programmer edit section *** (ОтчетОСервере.Расположение Set start)
                this.fРасположение = value;
                // *** Start programmer edit section *** (ОтчетОСервере.Расположение Set end)

                // *** End programmer edit section *** (ОтчетОСервере.Расположение Set end)
            }
        }
        
        /// <summary>
        /// Отчет о сервере.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОСервере.Сервер CustomAttributes)

        // *** End programmer edit section *** (ОтчетОСервере.Сервер CustomAttributes)
        [PropertyStorage(new string[] {
                "Сервер"})]
        [NotNull()]
        public virtual IIS.0007.Сервер Сервер
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Сервер Get start)

                // *** End programmer edit section *** (ОтчетОСервере.Сервер Get start)
                IIS.0007.Сервер result = this.fСервер;
                // *** Start programmer edit section *** (ОтчетОСервере.Сервер Get end)

                // *** End programmer edit section *** (ОтчетОСервере.Сервер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОСервере.Сервер Set start)

                // *** End programmer edit section *** (ОтчетОСервере.Сервер Set start)
                this.fСервер = value;
                // *** Start programmer edit section *** (ОтчетОСервере.Сервер Set end)

                // *** End programmer edit section *** (ОтчетОСервере.Сервер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтчетОСервереE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОСервереE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОСервереE", typeof(IIS.0007.ОтчетОСервере));
                }
            }
            
            /// <summary>
            /// "ОтчетОСервереL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОСервереL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОСервереL", typeof(IIS.0007.ОтчетОСервере));
                }
            }
        }
    }
}
