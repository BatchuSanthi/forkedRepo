 
  
    /* --- Responsive data table ----*/
    project.curDate = new Date().toUTCString();
    project.dtOptions2 = DTOptionsBuilder.newOptions().withOption('responsive', true);
    project.dtColumnDefs = [
    //    DTColumnDefBuilder.newColumnDef(4).withClass('none'),
        DTColumnDefBuilder.newColumnDef(7).withClass('none')
    ];
    
    /* --- Responsive data table ----*/
    
    
    
    project.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
    	 var defer = $q.defer();
    	 defer.resolve(project.trainModels);
    	 return defer.promise;
	}).withLanguage({
		//sLoadingRecords :'<span class="fa fa-spinner fa-spin fa-3x"></span>'
	})
	//.withPaginationType('full_numbers')
	//order by 4th column date modified 
	//.withOption('order', [[4, 'desc']])
	.withOption('responsive', true)
	.withOption('createdRow', createdRow);

	project.dtColumns = [
		DTColumnBuilder.newColumn('celeryTask.taskId').withTitle('RunID').notSortable(),
		DTColumnBuilder.newColumn('celeryTask.createdDate').withTitle('Run Date'),
		DTColumnBuilder.newColumn(null).withTitle('Execution Time').notSortable().renderWith(defaultValue),
		DTColumnBuilder.newColumn('celeryTask.message').withTitle('Training Metrics'),
		DTColumnBuilder.newColumn(null).withTitle('Hyper Parameters').notSortable().renderWith(defaultValue),
		DTColumnBuilder.newColumn(null).withTitle('Version').notSortable().renderWith(defaultValue),
		DTColumnBuilder.newColumn(null).withTitle('Status').notSortable().renderWith(status)
	];