angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.yemekler = [
    { adi:"Tepsi Mantısı",kategori:"Ana Yemek",tarif:"Hamuru sert olacak şekilde yoğurup beze haline getiriyoruz ve açıyoruz. Şerit halinde kesiyoruz.İç harcı için malzemeleri karıştırıp yoğuruyoruz, Kestiğimiz şeritlerin üzerine aralıklı olarak iç harcından yerleştiriyoruz.Daha sonra kenarlarından büzdürüyoruz. Sonra kesip tepsiye kenarlardan başlayarak diziyoruz.Tepsi tamamlandıktan sonra fırında 10 dakika kadar hamurun kendini toplaması için pişirdikten sonra kaynamış suyu yavaş yavaş ilave ederek pişiriyoruz.Pişirme esnasında salçalı suyu da ilave ediyoruz.Üzerinde sarımsaklı yoğurt ve yağda hafif yakılmış kırmızı toz biberle servis ediyoruz. Afiyet olsun.",logo:"https://img-s1.onedio.com/id-5ddfe1e03ad2f76311d2fa06/rev-0/w-500/h-500/f-jpg/s-d8a7744710fc1938489e674b158041baa47b9760.jpg", id: 0 },
    { adi:"Ciğer Şiş",kategori:"Ara Sıcak",tarif:"Öncelikle temizleyip yıkadığımız ciğerleri kuş başı doğuruyoruz.Zeytinyağı ve baharatlarla tuzunu ilave edip karıştırıyoruz.Üzerini streçleyip dolapta 1-2 saat dinlendiriyoruz.Dinlendirdiğimiz ciğerleri şişlere takip yağlı kağıt üzerine diziyoruz.180 derecede 25-30 dk pişiriyoruz. Çok lezzetli istediğiniz mezelerle ikram edebilirsiniz. afiyet olsun",logo:"https://cdn.yemek.com/mncrop/600/315/uploads/2015/09/ciger-sis-yeni.jpg", id: 1 },
    { adi:"İçli Köfte",kategori:"Ara Sıcak",tarif:"İlk önce harcını hazırlayalım, tavaya kıymayı alalım, suyunu salınca üzerine robotta çektiğiniz soğanı katalım .Soğanlar yumuşayınca baharatları ekleyelim zeytinyağı katalım, en son maydanozu atıp ocaktan alıp soğumaya bırakalım.Dışı için de bir kaba ince bulgur ve irmiği alalım üzerine suyu katıp kapak kapatalım ve 5 dk bekleyelim.Sonra yumurta baharatlar ve un salça katıp yoğuralım.Şekil için her evde olan limon sıkacağı kullandım. Streç film alıp ortasına koydum elimi ıslatarak küçük parçalar alıp streçin içine aldım ortasından kenara doğru yayarak açtım bu işlem çok kolay gerçekten harçtan koyup kapattım kızarttım ve afiyetle yedik",logo:"https://iasbh.tmgrup.com.tr/10c057/1200/627/0/153/1600/990?u=https://isbh.tmgrup.com.tr/sbh/2020/03/30/icli-kofte-tarifi-evde-icli-kofte-nasil-yapilir-1585578743820.jpg", id: 2 },
    { adi:"Yayla",kategori:"Çorba",tarif:"Su, sıvı yağ, tuz ve pirinçler tencereye alınır. Pirinçler yumuşayıncaya kadar kaynatılır.Ayrı bir kasede yoğurt, yumurta ve un, 1 su bardağına yakın su ile birlikte iyice çırpılır.Pirinçler yumuşayınca hızlıca karıştırarak yoğurtlu karışım çorbaya eklenir. Kaynayana kadar karıştırılır. Kaynayınca kısık ateşte 10-15 dk kaynatılır. Ara sıra karıştırmayı ihmal etmeyin.Çorbamız piştikten sonra altı kapatılır.Şık bir sunum olması açısından;Çorba kaselere alınır. Ayrı bir yerde tereyağı kızdırılarak nane ile karıştırılır. Ve kaselerdeki çorbaların üzerinde gezdirilir. Kalan naneli tereyağını tenceredeki çorbaya koyup karıştırın.Mis kokulu yayla çorbamız servise hazır.",logo:"https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/yayla-corbasi-yemekcom.jpg", id: 3},
    { adi:"Ezogelin",kategori:"Çorba",tarif:"Ezogelin çorbası yapmak için düdüklü tencerede önce rendelemiş olduğumuz soğanı ve ezmiş olduğumuz sarımsağı tereyağında kavuruyoruz. Soğanlar diriliğini kaybetsin yeterli yakmadan orta ateşte kavuralım.Soğanlar kavrulunca naneyi, kırmızı biberi ve salçayı ilave edip. Kavurmaya devam edelim.Bir iki karıştırdıktan sonra yıkadığımız mercimeği, pirinci, bulguru ve tuzunu da ilave ederek karıştıralım.Başka bir tarafta kaynamakta olan 2 litreye yakın suyu üzerine boşaltalım.Düdüklünün kapağını ve düdüğünü kapattıktan sonra 10 dakika pişiriyoruz. Normal tencerede de yapabilirsiniz ama biraz daha geç pişecektir (yaklaşık 30-40 dakika sürecektir).",logo:"https://i.sozcu.com.tr/wp-content/uploads/2020/04/25/iecrop/corba_depo_1_1_1587799936-400x400.jpg", id: 4}
  ];
  console.log("ıd:" + $stateParams.yemekId);
  if ($stateParams.yemekId) {
    $scope.bilgi =$scope.yemekler[$stateParams.yemekId];
  }
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
