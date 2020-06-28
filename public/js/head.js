document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'utf-8\' />");
document.writeln("		<link rel=\'stylesheet\' href=\'css/head.css\' />");
document.writeln("		<script src=\'js/jquery-3.2.1.min.js\'></script>");
document.writeln("	</head>");
document.writeln("		<header>");
document.writeln("			<div class=\'container\'>");
document.writeln("				<div class=\'logo\'>");
document.writeln("					<p>MC<sup>2</sup></p>");
document.writeln("				</div>");
document.writeln("				<nav>");
document.writeln("					<div class=\'header_list\'>");
document.writeln("						<div class=\'header_list_\'>");
document.writeln("							<div class=\'header_list_tit\'>");
document.writeln("							<a href=\'index.html\'>HOME</a>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("						<div class=\'header_list_\'>");
document.writeln("							<div class=\'header_list_tit\'>");
document.writeln("								<a>RESEARCH</a>");
document.writeln("							</div>");
document.writeln("							<div style=\'width:250px;\' class=\'list_children\'>");
document.writeln("									<a href = \'html/Perception.html\'>Video or Image Perception</a>");
document.writeln("								<br/>");
document.writeln("									<a href = \'html/Compression.html\'>Video Compression</a>");
document.writeln("								<br/>");
document.writeln("									<a href = \'html/VAR.html\'>Virtual/Augmented Reality</a>");
document.writeln("								<br/>");
document.writeln("									<a href = \'html/Communication.html\'>Multimedia Communication</a>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("						<div class=\'header_list_\'>");
document.writeln("							<div class=\'header_list_tit\'>");
document.writeln("							<a href=\'html/Publications.html\'>PUBLICATIONS</a>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("						<div class=\'header_list_\'>");
document.writeln("							<div class=\'header_list_tit\'>");
document.writeln("							<a href=\'html/Databases_Codes.html\'>DATABASES&amp;CODES</a>");
document.writeln("							</div>");
document.writeln("							<!--<div class=\'list_children\'>");
document.writeln("								<p>Imagey Preion1</p>");
document.writeln("								<p>Image/ Salition2</p>");
document.writeln("								<p>Image/Vidiction3</p>");
document.writeln("								<p>Image/Video on4</p>");
document.writeln("							</div>-->");
document.writeln("						</div>");
document.writeln("						<div class=\'header_list_\'>");
document.writeln("							<div class=\'header_list_tit header_list_tit_last\'>");
document.writeln("							<a href= \'html/Members.html\'>MEMBERS</a>");
document.writeln("							</div>");
document.writeln("							<div class=\'list_children\'>");
document.writeln("								<a href = \'html/Members.html#faculty\'>Faculty</a>");
document.writeln("								<br/>");
document.writeln("								<a href = \'html/Members.html#phd\'>Ph.D Students</a>");
document.writeln("								<br/>");
document.writeln("								<a href = \'html/Members.html#master\'>Master Students</a>");
document.writeln("								<br/>");
document.writeln("								<a href = \'html/Members.html#under\'>Undergraduates</a>");
document.writeln("								<br/>");
document.writeln("								<a href = \'html/Members.html#alumni\'>Alumni</a>");
document.writeln("							</div>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("					");
document.writeln("				</nav>");
document.writeln("			</div>");
document.writeln("");
document.writeln("		</header>");
document.writeln("	<script type=\'text/javascript\'>");
document.writeln("		");
document.writeln("		$(document).ready(function(){");
document.writeln("			$(\'.header_list_\').mouseover(function(){");
document.writeln("			    $(this).children(\'.list_children\').slideDown(300);");
document.writeln("			});");
document.writeln("			$(\'.header_list_\').mouseleave(function(){");
document.writeln("			    $(this).children(\'.list_children\').slideUp(300);");
document.writeln("			});");
document.writeln("		})");
document.writeln("	</script>");
document.writeln("</html>");
document.writeln("");