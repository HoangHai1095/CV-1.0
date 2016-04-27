
angular.module('MyProfile', [])
        .controller('ExampleController', ['$scope', function($scope)
        {
            // data
            $scope.profile = {
                src:'https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12963518_1242886602407942_3988529011869897264_n.jpg?oh=895107f14950bb8e4006246a48de4f19&oe=57BEBBF9',
                href:'https://www.facebook.com/be.bu.98'
            };
            $scope.profile_overview = {
                name:'Hải Tô',
                fullname:'Tô Hoàng Hải',
                job:"university of science"
            };
            $scope.extra_info=[
                {
                    name:"current",
                    content:"Student of University of Science"
                },
                {
                   name:"previous",
                   content:'Student of Phú Nhuận High School'
                },
                {
                    name:"Education",
                    content: "Student of university of science"
                }

            ];
            $scope.aboutme = [
                {
                    name: "Email",
                    content:"thhai1312172@gmail.com"
                },
                {
                    name: "Phone",
                    content:"01219960092"
                },
                {
                    name: "Address",
                    content:"277/23 Trường Chinh F.14 Q.Tân Bình Tp. Hồ Chí Minh"
                }
            ];
            $scope.description={
                content1:"Internet executive with over 20 years of experience, including general management of mid to large size organizations, corporate development, product development, business operations, and strategy.",
                 content2:"Currently CEO at LinkedIn, the web's largest and most powerful network of professionals.",
                content3:"Prior to LinkedIn, was an Executive in Residence at Accel Partners and Greylock Partners. Primarily focused on advising the leadership teams of the firm's existing consumer technology portfolio companies while also working closely with the firm’s partners to evaluate new investment opportunities.",
                content4:"Previously served in key leadership roles at Yahoo! for over seven years, most recently as the Executive Vice President of Yahoo!'s Network Division managing Yahoo's consumer web product portfolio, including Yahoo's Front Page, Mail, Search, and Media products.",
                content5:"Specialties: general management, corporate development, product development, business operations, strategy, product marketing, non-profit governance"
                 };
            $scope.position = [
            {
                href:"https://www.linkedin.com/company/linkedin?trk=ppro_cprof",
                logo_img:"https://media.licdn.com/media/AAEAAQAAAAAAAAL0AAAAJGMwYWZhNTYxLWJkMTktNDAzMi05NzEzLTlhNzUxMGU0NDg0Mw.png",
                title_href:"https://www.linkedin.com/title/ceo?trk=pprofile_title",
                title_name:"CEO",
                subtitle_name:"LinkedIn",
                date_range:"December 2008 – Present (7 years 5 months)"
            },
             {
                href:"https://www.linkedin.com/company/linkedin?trk=ppro_cprof",
                logo_img:"https://media.licdn.com/media/p/2/000/205/177/3cfd5b9.png",
                title_href:"https://www.linkedin.com/title/ceo?trk=pprofile_title",
                title_name:"Member, Board of Directors",
                subtitle_name:"Intuit",
                date_range:"April 2012 – Present (4 years 1 month)"
            },
            {
                href:"https://www.linkedin.com/company/linkedin?trk=ppro_cprof",
                logo_img:"https://media.licdn.com/media/AAEAAQAAAAAAAAIEAAAAJGFhNGYyNjBjLWUxOWItNDRlYi05MTY0LTE5ZDA3YThhMTRkYg.png",
                title_href:"https://www.linkedin.com/title/ceo?trk=pprofile_title",
                title_name:"Member, Board of Directors",
                subtitle_name:"DonorsChoose",
                date_range:"2007 – Present (9 years)"
            },
             {
                href:"https://www.linkedin.com/company/linkedin?trk=ppro_cprof",
                logo_img:" https://media.licdn.com/media/p/5/005/00c/1bf/134d5ca.png",
                title_href:"https://www.linkedin.com/title/ceo?trk=pprofile_title",
                title_name:"Member, Board of Directors",
                subtitle_name:"Boys & Girls Clubs of the Peninsula",
                date_range:"2011 – Present (5 years)San Francisco Bay Area"
            }
            ];
        }]);
                        
 
                   
