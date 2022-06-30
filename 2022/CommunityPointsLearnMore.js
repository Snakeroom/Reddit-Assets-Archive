// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.6e09cdcdf15926d21284.js
// Retrieved at 6/30/2022, 10:00:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, o) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/classNames/index.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = o.n(s);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					className: t,
					highContrast: o,
					onClick: a
				} = e;
				return i.a.createElement("button", {
					onClick: a,
					className: Object(n.a)(l.a.closeButton, {
						[l.a.highContrast]: o
					}, t),
					"aria-label": u._("Close", null, {
						hk: "3Qarlp"
					})
				}, i.a.createElement(r.b, {
					className: l.a.closeIcon
				}))
			}
		},
		"./src/reddit/icons/svgs/ArrowRightThin/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				a = o.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, o) {
			"use strict";
			var n, a, i, r;
			o.d(t, "b", (function() {
					return a
				})), o.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, o) {
			"use strict";
			var n;

			function a(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			o.d(t, "a", (function() {
					return n
				})), o.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, o) {
			e.exports = {
				carousel: "_3vQyUlP9YLzmdL2rsquLS-",
				imageContainer: "_2fHEqYCy2KASrMaQgflk9d",
				image: "_3z5mBSNxkSLnbR6usgbqpT",
				before: "_2JttHHaD7zf0Mbh1a5nRuW",
				after: "_39ks1t7udSkwDSJapMxhoe",
				textContainer: "DCfzAVcgI71D_KyuFWTCt",
				text: "_7rNTYtq4K9spIZ7RPkHx0",
				slideTitle: "_30M0sUJwfP6X2VcrCV3b9D",
				hiddenText: "TE2V4h2gDawl2Jss4N8Z7",
				pager: "_3FdYuxiANbzVWGxeXemc_M",
				progressDot: "fm3copvWWgfUMqVsK6uEV",
				active: "_1sREUpzXrLYpeFbGcvHOKm",
				nextButton: "_2qRdqJkJATZDQvbXLgMgc-",
				hidden: "_2BV3vldc4MxhlrcUmzjGR_",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less": function(e, t, o) {
			e.exports = {
				container: "_3XsRSKNK-knnbQqK5rBnsJ",
				iconContainer: "_2rkXJgirbHrzpuhJs803P4",
				rotated: "_3ZZ9F08bKDYNGthWmSy4Dw",
				menuIcon: "_1mLHEqdVX-yfSGDKAmCwcF"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_81E2YESAdbLBEPdlCjiWx",
				menuContainer: "_3os0Eb9YY4sdudgVb6wagz",
				mobileMenuContainer: "_2z4mOlcBSFl3fYxFC1gxlD",
				menu: "_1jgP4w2Z18f04dk6A3tbRN",
				mobileMenu: "_2Y92kPDUP8agVAuBlHhX0s",
				floatingMenuButton: "_1NJ49DYRPRJ9Cq3MfVktfl",
				content: "Dy49ZLgHjDlSQA8oba7h",
				largeCenteredImage: "vvaihHNP51aj6GLYESKE8",
				smallTitleImage: "_2EXVfE7qOnxkNg5gZpJYEY",
				sideImageContainer: "_2koAQEaqF8z7uyv_6oCHml"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less": function(e, t, o) {
			e.exports = {
				container: "_3RJzS_cAXEXOu1Y__ViOWt",
				section: "_3hdgyv5SB3KEMzi0Q7ndaY",
				categoryHeader: "_3IMQI4BfhAv-jdQd8-IRxc",
				menuItem: "_2seWMu6B5kaYQ7lpTW6akn",
				active: "_3jsHkW_28FYYDl7q470ton",
				nightmode: "jXXFN7oueWlcKG2qUXsrs"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_39s4Rg_2-Yvhg8_j7HmwHz",
				content: "_21JaPYggXVyLsz9Gm0gafa",
				logo: "_1suWmsdOylQibxtvENDH0J",
				link: "FSlJwTR_glxbHijEQl1LP",
				spacer: "_2M28l0MkIvJi8JhKE7Puf"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3hCEJSoCggYeV4_Vzkfj6p",
				nightmode: "_3t1hqqIBXV1ISlXksPyR4v",
				logo: "I0sVgzsD8iUdHKzDn3w8a",
				snoo: "iCZwiIk1X_P-1bWrMlBo9",
				wordmark: "_3IIgVNEfc4FHb6Uabcf5XO",
				sections: "_2dnnlMMF10lQC5D3XckQWq",
				sectionText: "_3fpURPqNv7UjrUQUoOgWlU",
				joinWaitlist: "_35PGwOCrj4RRPhOFBN4lI9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less": function(e, t, o) {
			e.exports = {
				container: "_1pYG3qIuM4DcrXBl4ngRLH",
				nightmode: "_13L8wx4qz4Fqb03MSVwQvz",
				expanded: "_1ErKYza74uPs_NEpBYfi2k",
				hidden: "FcdN7km4odlWAbVAOMQkD",
				imageSection: "zkgtJc3iICyXxf4wAJmZb",
				image: "Scvg5NjTLZ3VrePmrZZ2A",
				textSection: "_3otwIn4fK0662wqoyFKWMf",
				title: "_3iniGJys4pL41Wl9bCLgxm",
				subtitle: "_2Cc_c4fO2XRibfBK7ujeM3",
				body: "_3ehMpTZWHsOclJbP-nb9UB",
				expandButton: "BuJ81mwGD_tsDKOfiSoGx",
				plusIcon: "_1rOiCdlgF_4fotbxlTYrnO"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less": function(e, t, o) {
			e.exports = {
				title: "_34fNgU8PzDdn8N1dy3ivp5",
				benefitsContainer: "igYwgfFD3VTXbAuDpR11Z",
				expanded: "gpTg3u93gk7ivOpu_dFw1"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2g4zHxTR8YPXf6MxxTZk7x",
				mainSceneMaxWidthContainer: "_3UsELnL-t4fWupdTjbCR_V",
				mainSceneContainer: "_3RjIgU8tOgxONqCDsLnZVR",
				fallbackStaticImage: "_2xZ5UC6gTSmPmIJA5XaNlG",
				mainScene: "_1rRH8io2oTfod98xPvCKtZ",
				title: "_2mxGnwsJiO-qvSzpOulRFX",
				super: "_3eb9BDGx0nyIh-oCpZbHnQ",
				subtitle: "_3m3_p5jybv4MaYrJ2PVdD-",
				bodyText: "XofGmuW13eskj1YFcBtaR",
				waitlistButton: "_3P-mpJEZcqloYGIVLElRwC"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less": function(e, t, o) {
			e.exports = {
				container: "_9EyzkvU_juhro9apbxsed"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1jdWtwUDsZUYK8cKl4ShoL",
				image: "_21S4Zcb7SWOn26f2PHTYVJ",
				textContainer: "_1KUhJVhvhYgJy3UP7AVh8A",
				title: "_1_XEsvgDaW6Ipmo8_EbUvx",
				body: "_30rAKfIDOJdS0e_nAZ0SUC",
				button: "_1PiFEnhFGjcOJ8DJpZEZrs",
				buttonIcon: "_5enw_h_QNP0edxOuTIgVT",
				modal: "_3AQQcIW5Bg4kBV6tYo-SiG",
				modalOverlay: "_3OX4exO0VgI32mkudOynM4"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2ge27xQx1Gt9ZLEAF5G56e",
				snoo: "_2w697DOO736IN0y8x1G_r5",
				subtitle: "_1knd7dCNDtGNteCtEtWMI4",
				docsButton: "_3WXyHuUGgkzB-1Qc3roRsZ",
				docsIcon: "_1Y7YQr9nJOHYMXIJV9bR10",
				docTextShort: "_9B9hYKnRsbpS0xQ6bTVI_",
				docTextFull: "_1cBiAI3Lmkt0Hm6YzkDtth"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less": function(e, t, o) {
			e.exports = {
				container: "_2JWWvW2ewMO4EJh4aah_Y7",
				textSection: "_3LHXd49gDHLRyBpMYidVtJ",
				textContainer: "_2jBZPVax0cA0Md6DhqyAo0",
				title: "_3iRk7kbiRtkK0jjfcKqc-A",
				imageSection: "_3Csuw0qH6o42AjO_1RWieH",
				image: "_3KQSH2itVDb7THQByNoRg_"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less": function(e, t, o) {
			e.exports = {
				title: "qs7iEx9A8SgBw6iazade7",
				subtitle: "_1QaW2mV2hdesrU3AoIJMIJ",
				featureContainer: "_2EyftCjwIT4OedYkYEeLWp",
				bodyText: "_1eyjP53kp-6YZvRBsjsrJZ",
				blackText: "_2tWli1aET4UuzyDIVL2EBk",
				bodyTitle: "_30cHBBkgHrSZwzZK6bYcS",
				bodyDetail: "_2CQLcOyg-dqNiiIS4hqGK9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less": function(e, t, o) {
			e.exports = {
				backgroundContainer: "_2oJWRZzf_TEBMLEbgx16At",
				title: "_3JCUSaj8y3O2gZS9WULM7W",
				subtitle: "_3iijLFwnHqOOSiOWRFviQB",
				body: "_3SmftvDrw0EEwYrT1vFARS",
				moon: "W7I9PeaA-0ziX1ZxLfwG4",
				rocket: "_1ImCaNv5DgWVuIx7lPH-5b",
				waitlistButton: "_2CooTtX1sr5RsRthPTFnrV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2EkB4QKAhEjNwVFUD_8JmV",
				textSection: "_2jCzqlAuwDwwpuCgmfIMQ7",
				textContainer: "_3T9M1hVNmokkQWh03xX8jk",
				title: "_3-_ejcDFGp596JkkqRsIsD",
				subtitle: "_1fiXx_cB7w4HkwykMuyx0w",
				body: "_1JRBoMFbhlLJke-WjiF9tg",
				imageSection: "_26XceelGMk4WXZndVXPgs0",
				image: "_39n5c2gafF2Zu9YWqEe6cM"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, o) {
			e.exports = {
				anchor: "_1ms_1DEhbPfoWXTh7V61HA",
				anchorParent: "_31htbIEbYEE6IxL_i638-C",
				containerPadding: "_3QgQYeMEeB78hap31D9Da5",
				container: "_2hno-FBggC-9UCyeqfnHlk",
				offline: "_3e_2rDbDAsM6SoOvSxKCaB",
				showDeprecated: "_3NRmcYs-YgClL2HxjajtHX",
				showFPR: "_1mBX91Pbe0QmUzs41SlVrU",
				showFpr: "_1mBX91Pbe0QmUzs41SlVrU",
				showSuspended: "_3yKfNeE_lGGA0CEHo6cC1a",
				navExperiment: "_1ZuwXgOzts0UNccD1GckNF",
				gradientTitleText: "_3VKA4-REk2G4og1H9g0OVD",
				spiral: "_34sjOdYnL94MgTNoNO_z4F",
				communityPointsSection: "_1xGdSbQlhCZiz37M3l4MDa",
				benefitsSection: "_2N1oSKnW_wEttdF6sYbS34",
				featuresSection: "_3gQQPnfeKxZBlYPTarr9Kq",
				faqSection: "BW44I43BTQHj1PYxeGeoW",
				vaultSection: "_6K5JcTVxN5uDsD5M_-Ju-",
				cryptoFutureSection: "_21NRzDYwPqzOpUzZ2w_r3j",
				joinWaitlistSection: "_3f4Fk6abLq8KKZzOZpqbwX"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "Anchor", (function() {
				return tt
			}));
			var n = o("./src/config.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./src/reddit/hooks/usePageLayer.ts"),
				s = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/routes/meta/constants.ts");
			const u = /\/community-points\/documentation\/?(.*)/,
				c = e => {
					var t, o;
					const n = null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.url;
					if (!n) return null;
					const a = n.match(u);
					return a && a[1] ? a[1] : null
				},
				m = e => `/community-points/documentation/${e}`,
				{
					fbt: d
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: h
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var p = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less"),
				b = o.n(y);
			const {
				fbt: g
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: f
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: w
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var k = o("./src/reddit/icons/fonts/index.tsx"),
				v = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less"),
				P = o.n(v);
			const _ = e => {
					let {
						className: t,
						onClick: o,
						isMenuOpen: n
					} = e;
					return i.a.createElement("button", {
						className: Object(s.a)(t, P.a.container),
						onClick: o
					}, i.a.createElement("div", {
						className: Object(s.a)(P.a.iconContainer, {
							[P.a.rotated]: n
						})
					}, i.a.createElement(k.a, {
						name: n ? "add" : "menu",
						className: P.a.menuIcon
					})))
				},
				{
					fbt: E
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var C = o("./node_modules/react-redux/es/index.js"),
				S = o("./src/reddit/selectors/user.ts"),
				V = o("./node_modules/fbt/lib/FbtPublic.js");
			const I = [{
				key: "introduction",
				name: V.fbt._("Intro", null, {
					hk: "373VV7"
				}),
				pages: [{
					key: "introduction",
					name: V.fbt._("Introduction", null, {
						hk: "f7WaD"
					})
				}]
			}, {
				key: "points-distribution",
				name: V.fbt._("Points Distribution", null, {
					hk: "2zNnfy"
				}),
				pages: [{
					key: "distribution-process",
					name: V.fbt._("Distribution Process", null, {
						hk: "723Tq"
					})
				}, {
					key: "distribution-rules",
					name: V.fbt._("Distribution Rules", null, {
						hk: "357sNF"
					})
				}, {
					key: "spam-and-abuse",
					name: V.fbt._("Spam & Abuse", null, {
						hk: "1uqIAx"
					})
				}]
			}, {
				key: "features",
				name: V.fbt._("Features", null, {
					hk: "3xGVnE"
				}),
				pages: [{
					key: "reputation-and-governance",
					name: V.fbt._("Reputation & Governance", null, {
						hk: "9h6Ny"
					})
				}, {
					key: "special-memberships",
					name: V.fbt._("Special Memberships", null, {
						hk: "1c2Bqa"
					})
				}, {
					key: "coins-and-awards",
					name: V.fbt._("Coins & Awards", null, {
						hk: "4zZQUp"
					})
				}, {
					key: "redeeming-points",
					name: V.fbt._("Redeeming Points", null, {
						hk: "MOTKC"
					})
				}, {
					key: "tipping",
					name: V.fbt._("Tipping", null, {
						hk: "mXlVc"
					})
				}, {
					key: "points-and-automoderator",
					name: V.fbt._("Points & Automoderator", null, {
						hk: "4bmuZM"
					})
				}]
			}, {
				key: "blockchain",
				name: V.fbt._("Blockchain", null, {
					hk: "3HjKIg"
				}),
				pages: [{
					key: "vault",
					name: V.fbt._("Vault", null, {
						hk: "4vC7Cj"
					})
				}, {
					key: "points-on-the-blockchain",
					name: V.fbt._("Points on the Blockchain", null, {
						hk: "10M3cB"
					})
				}, {
					key: "developers",
					name: V.fbt._("Developers", null, {
						hk: "3lAfaF"
					})
				}]
			}, {
				key: "additional-resources",
				name: V.fbt._("Additional Resources", null, {
					hk: "7bp0b"
				}),
				pages: [{
					key: "faqs",
					name: V.fbt._("Frequently Asked Questions", null, {
						hk: "4e4s5J"
					})
				}]
			}];
			var T = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less"),
				x = o.n(T);
			const R = e => {
					let {
						className: t,
						onClickItem: o
					} = e;
					const n = Object(r.a)(),
						a = c(n),
						l = Object(C.e)(S.db);
					return i.a.createElement("div", {
						className: Object(s.a)(x.a.container, t)
					}, i.a.createElement("nav", null, i.a.createElement("ol", null, I.map(e => i.a.createElement("div", {
						key: e.name,
						className: x.a.section
					}, e.pages.length > 1 && i.a.createElement("h4", {
						className: x.a.categoryHeader
					}, e.name), i.a.createElement("ol", null, e.pages.map(e => {
						let {
							key: t,
							name: n
						} = e;
						return i.a.createElement(M, {
							key: t,
							className: Object(s.a)({
								[x.a.nightmode]: l
							}),
							active: t === a,
							name: n,
							onClick: o,
							pageKey: t
						})
					})))))))
				},
				M = e => {
					let {
						className: t,
						active: o,
						name: n,
						onClick: a,
						pageKey: r
					} = e;
					return i.a.createElement(p.a, {
						to: m(r),
						onClick: a
					}, i.a.createElement("li", {
						className: Object(s.a)(x.a.menuItem, {
							[x.a.active]: o
						}, t)
					}, n))
				},
				{
					fbt: N
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: A
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: F
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: B
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: O
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: D
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: j
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: W
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var G = o("./node_modules/react-router-redux/es/index.js");
			const Y = e => {
					let {
						className: t
					} = e;
					const o = Object(C.d)(),
						[n, l] = Object(a.useState)(!1),
						u = Object(r.a)(),
						d = c(u);
					return Object(a.useEffect)(() => {
						window.scrollTo(0, 0)
					}, [d]), d && (e => ["introduction", "distribution-process", "distribution-rules", "spam-and-abuse", "reputation-and-governance", "special-memberships", "coins-and-awards", "redeeming-points", "tipping", "points-and-automoderator", "vault", "points-on-the-blockchain", "developers", "faqs", "contact"].includes(e))(d) ? i.a.createElement("div", {
						className: b.a.container
					}, i.a.createElement("div", {
						className: Object(s.a)(b.a.menuContainer, {
							[b.a.mobileMenuContainer]: n
						})
					}, i.a.createElement(R, {
						className: Object(s.a)(b.a.menu, {
							[b.a.mobileMenu]: n
						}),
						onClickItem: () => l(!1)
					})), i.a.createElement("div", {
						className: b.a.content
					}, L[d]), i.a.createElement(_, {
						className: b.a.floatingMenuButton,
						onClick: () => l(!n),
						isMenuOpen: n
					})) : (o(Object(G.b)(m("introduction"))), null)
				},
				L = {
					introduction: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, E._("Introduction", null, {
						hk: "1ERR5f"
					})), i.a.createElement("h2", null, E._("It is time for communities to break free of walled gardens and take ownership of their existence online.", null, {
						hk: "1U7V3v"
					})), i.a.createElement("img", {
						className: b.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/future.png`,
						alt: E._("Imagine a crypto future", null, {
							hk: "2fm7jC"
						})
					}), i.a.createElement("section", null, i.a.createElement("h3", null, E._("The Future of Online Communities", null, {
						hk: "2l5mV2"
					})), E._("{=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.}{=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.}{=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.}{=It is time for them to take back ownership and control. It is time for a change.}", [E._param("=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", i.a.createElement("p", null, E._("Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", null, {
						hk: "vHVJ6"
					}))), E._param("=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", i.a.createElement("p", null, E._("But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", null, {
						hk: "GvwbA"
					}))), E._param("=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", i.a.createElement("p", null, E._("Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", null, {
						hk: "MiPUV"
					}))), E._param("=It is time for them to take back ownership and control. It is time for a change.", i.a.createElement("p", null, E._("It is time for them to take back ownership and control. It is time for a change.", null, {
						hk: "9Dp2V"
					})))], {
						hk: "2A7TFn"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, E._("Community Points", null, {
						hk: "1F2Duo"
					})), E._("{=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.}{=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.}{=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.}", [E._param("=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", i.a.createElement("p", null, E._("Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", null, {
						hk: "1v0cui"
					}))), E._param("=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", i.a.createElement("p", null, E._("As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", null, {
						hk: "3u0Hub"
					}))), E._param("=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", i.a.createElement("p", null, E._("Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", null, {
						hk: "3vMwoH"
					})))], {
						hk: "2jUDyJ"
					}))), null),
					"distribution-process": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, g._("Distribution Process", null, {
						hk: "20vYmV"
					})), i.a.createElement("h2", null, g._("Community Points are distributed every 4 weeks based on contributions people make to the community.", null, {
						hk: "126Ahj"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Who gets Community Points?", null, {
						hk: "1Ed45W"
					})), i.a.createElement("div", {
						className: b.a.sideImageContainer
					}, i.a.createElement("div", null, g._("{=Community Points are distributed across multiple groups.}{=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [g._param("=Community Points are distributed across multiple groups.", i.a.createElement("p", null, g._("Community Points are distributed across multiple groups.", null, {
						hk: "11MZXG"
					}))), g._param("=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("ul", null, g._("{=Contributors receive 50% of Community Points.}{=Moderators receive 10% of Community Points.}{=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [g._param("=Contributors receive 50% of Community Points.", i.a.createElement("li", null, g._("Contributors receive 50% of Community Points.", null, {
						hk: "4F2Wkl"
					}))), g._param("=Moderators receive 10% of Community Points.", i.a.createElement("li", null, g._("Moderators receive 10% of Community Points.", null, {
						hk: "3HcuPW"
					}))), g._param("=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("li", null, g._("The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", null, {
						hk: "2RRHD"
					})))], {
						hk: "2avYXi"
					})))], {
						hk: "1y9aEC"
					})), i.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/chart.png`,
						alt: g._("Pie chart", null, {
							hk: "3KLyoS"
						})
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, g._("How do contributors earn Community Points?", null, {
						hk: "1R03CI"
					})), g._("{=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.}{=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.}{=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.}{=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.}", [g._param("=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", i.a.createElement("p", null, g._("Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", null, {
						hk: "nyK1Z"
					}))), g._param("=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", i.a.createElement("p", null, g._("The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", null, {
						hk: "26h1VY"
					}))), g._param("=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.", i.a.createElement("p", null, g._("Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. See {=Distribution Rules} for more details.", [g._param("=Distribution Rules", i.a.createElement(p.a, {
						to: m("distribution-rules")
					}, g._("Distribution Rules", null, {
						hk: "103XSa"
					})))], {
						hk: "21PV0k"
					}))), g._param("=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", i.a.createElement("p", null, g._("In order for contributors to claim the Points they have earned, they need to create a {=Vault} within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", [g._param("=Vault", i.a.createElement(p.a, {
						to: m("vault")
					}, g._("Vault", null, {
						hk: "2vIOZI"
					})))], {
						hk: "1FK3us"
					})))], {
						hk: "33062h"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("How many Community Points are distributed?", null, {
						hk: "2Ov00C"
					})), g._("{=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.}{=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.}{=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.}{=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.}", [g._param("=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", i.a.createElement("p", null, g._("When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", null, {
						hk: "2yK1zs"
					}))), g._param("=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", i.a.createElement("p", null, g._("This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", null, {
						hk: "3Ys2uE"
					}))), g._param("=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", i.a.createElement("p", null, g._("After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", null, {
						hk: "4mGiw4"
					}))), g._param("=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", i.a.createElement("p", null, g._("In addition to the creation of new Points described above, 50% of {=burned Points} are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", [g._param("=burned Points", i.a.createElement(p.a, {
						to: m("special-memberships")
					}, g._("burned Points", null, {
						hk: "lu4Xg"
					})))], {
						hk: "38G9NN"
					})))], {
						hk: "vb8rK"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("What is the process for distribution?", null, {
						hk: "EdIh3"
					})), g._("{=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.}{=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.}{=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.}", [g._param("=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", i.a.createElement("p", null, g._("Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", null, {
						hk: "2IVeQr"
					}))), g._param("=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", i.a.createElement("p", null, g._("After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", null, {
						hk: "12ZLeS"
					}))), g._param("=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", i.a.createElement("p", null, g._("After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", null, {
						hk: "2YGZKP"
					})))], {
						hk: "2Hcl3u"
					}), i.a.createElement("h3", null, g._("How do moderators receive Community Points?", null, {
						hk: "IIhgW"
					})), g._("{=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.}{=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.}{=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.}{=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.}", [g._param("=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", i.a.createElement("p", null, g._("Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", null, {
						hk: "39OdCQ"
					}))), g._param("=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", i.a.createElement("p", null, g._("The simplest way to set up a moderator wallet is with a Reddit {=Vault} in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", [g._param("=Vault", i.a.createElement(p.a, {
						to: m("vault")
					}, g._("Vault", null, {
						hk: "RP5yN"
					})))], {
						hk: "nccuX"
					}))), g._param("=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.", i.a.createElement("p", null, g._("Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carry {=governance weight} with them. Points transferred from other addresses will not carry this weight.", [g._param("=governance weight", i.a.createElement(p.a, {
						to: m("reputation-and-governance")
					}, g._("governance weight", null, {
						hk: "2kpak2"
					})))], {
						hk: "rUi1c"
					}))), g._param("=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", i.a.createElement("p", null, g._("Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", null, {
						hk: "3uYrxZ"
					})))], {
						hk: "mFEBl"
					}))), null),
					"distribution-rules": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, f._("Distribution Rules", null, {
						hk: "3kkkm5"
					})), i.a.createElement("h2", null, f._("Community Points are a powerful tool that subreddits can use to shape content and behavior.", null, {
						hk: "2FFsru"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, f._("Community Rules", null, {
						hk: "2q9cMn"
					})), f._('{=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.}{=Here is a non-exhaustive list of factors that can be used to shape distribution rules:}{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")}{=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:}{=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month}{=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:}{=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on deleted posts and comments does not count (including karma earned before deletion)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post\'s creation time are counted (including on comments of that post)}', [f._param("=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", i.a.createElement("p", null, f._("Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", null, {
						hk: "3fjvzH"
					}))), f._param("=Here is a non-exhaustive list of factors that can be used to shape distribution rules:", i.a.createElement("p", null, f._("Here is a non-exhaustive list of factors that can be used to shape distribution rules:", null, {
						hk: "3c6GBa"
					}))), f._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("ul", null, f._('{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")}{=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")}{=Posts vs comments (e.g., "double comment karma")}{=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")}{=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")}{=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")}{=A specific post (e.g., "don\'t count karma from the daily discussion")}{=Making a post or comment (e.g., "making a post reduces karma by 25")}{=Membership (e.g., "users with a membership get 25% bonus to karma they earned")}', [f._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', i.a.createElement("li", null, f._('Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', null, {
						hk: "3vlqdu"
					}))), f._param('=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', i.a.createElement("li", null, f._('Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', null, {
						hk: "4eNQrW"
					}))), f._param('=Posts vs comments (e.g., "double comment karma")', i.a.createElement("li", null, f._('Posts vs comments (e.g., "double comment karma")', null, {
						hk: "3gw73R"
					}))), f._param('=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', i.a.createElement("li", null, f._('Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', null, {
						hk: "1Cch8N"
					}))), f._param('=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', i.a.createElement("li", null, f._('Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', null, {
						hk: "faJGP"
					}))), f._param('=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', i.a.createElement("li", null, f._('Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', null, {
						hk: "2HZslh"
					}))), f._param('=A specific post (e.g., "don\'t count karma from the daily discussion")', i.a.createElement("li", null, f._('A specific post (e.g., "don\'t count karma from the daily discussion")', null, {
						hk: "2rnWSv"
					}))), f._param('=Making a post or comment (e.g., "making a post reduces karma by 25")', i.a.createElement("li", null, f._('Making a post or comment (e.g., "making a post reduces karma by 25")', null, {
						hk: "419K9P"
					}))), f._param('=Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("li", null, f._('Membership (e.g., "users with a membership get 25% bonus to karma they earned")', null, {
						hk: "be3ar"
					})))], {
						hk: "2nws06"
					}))), f._param("=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", i.a.createElement("p", null, f._("For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", null, {
						hk: "2I0bQB"
					}))), f._param('=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month', i.a.createElement("ul", null, f._('{=Double comment karma to encourage more comments than posts}{=Limit karma earned from any individual post or comment to 1000}{=Only count 10% of karma earned on "media" or "comedy" posts}{=Bonus Points for users who vote in polls}{=15000 cap on Points earned by any single user per month}', [f._param("=Double comment karma to encourage more comments than posts", i.a.createElement("li", null, f._("{=Double comment karma to encourage more comments than posts}", [f._param("=Double comment karma to encourage more comments than posts", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/k12wnd/moon_proposal_double_comment_karma/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Double comment karma to encourage more comments than posts", null, {
						hk: "2YBVsB"
					})))], {
						hk: "22Jzlt"
					}))), f._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("li", null, f._("{=Limit karma earned from any individual post or comment to 1000}", [f._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm8she/limit_post_karma_to_1k_and_limit_comment_karma_to/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Limit karma earned from any individual post or comment to 1000", null, {
						hk: "3geIam"
					})))], {
						hk: "4nPCPe"
					}))), f._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("li", null, f._('{=Only count 10% of karma earned on "media" or "comedy" posts}', [f._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm99v3/change_moon_distribution_for_comedy_posts_and/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._('Only count 10% of karma earned on "media" or "comedy" posts', null, {
						hk: "3f3UnH"
					})))], {
						hk: "441E3c"
					}))), f._param("=Bonus Points for users who vote in polls", i.a.createElement("li", null, f._("{=Bonus Points for users who vote in polls}", [f._param("=Bonus Points for users who vote in polls", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/m7ehzz/proposal_5_bonus_moons_for_anyone_who_votes_on/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Bonus Points for users who vote in polls", null, {
						hk: "1rzvHN"
					})))], {
						hk: "218GAv"
					}))), f._param("=15000 cap on Points earned by any single user per month", i.a.createElement("li", null, f._("{=15000 cap on Points earned by any single user per month}", [f._param("=15000 cap on Points earned by any single user per month", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/mrn758/15000_karma_cap_on_moon_distribution/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("15000 cap on Points earned by any single user per month", null, {
						hk: "11GVzJ"
					})))], {
						hk: "UpuVV"
					})))], {
						hk: "4uAbqW"
					}))), f._param("=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", i.a.createElement("p", null, f._("In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", null, {
						hk: "2NOwzL"
					}))), f._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on deleted posts and comments does not count (including karma earned before deletion)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("ul", null, f._("{=Karma earned on removed posts and comments does not count (including karma earned before removal)}{=Karma earned on deleted posts and comments does not count (including karma earned before deletion)}{=Karma earned on stickied or distinguished content does not count}{=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}{=Only votes within 3 days of a post's creation time are counted (including on comments of that post)}", [f._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)", i.a.createElement("li", null, f._("Karma earned on removed posts and comments does not count (including karma earned before removal)", null, {
						hk: "41qiS2"
					}))), f._param("=Karma earned on deleted posts and comments does not count (including karma earned before deletion)", i.a.createElement("li", null, f._("Karma earned on deleted posts and comments does not count (including karma earned before deletion)", null, {
						hk: "3YMTql"
					}))), f._param("=Karma earned on stickied or distinguished content does not count", i.a.createElement("li", null, f._("Karma earned on stickied or distinguished content does not count", null, {
						hk: "3WWvKi"
					}))), f._param("=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", i.a.createElement("li", null, f._("Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", null, {
						hk: "TppOV"
					}))), f._param("=Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("li", null, f._("Only votes within 3 days of a post's creation time are counted (including on comments of that post)", null, {
						hk: "13viz4"
					})))], {
						hk: "E71Cb"
					})))], {
						hk: "4byvbL"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, f._("Deciding Community Rules", null, {
						hk: "2BDpM6"
					})), f._("{=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls}", [f._param("=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls", i.a.createElement("p", null, f._("Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules through {=Governance Polls}.", [f._param("=Governance Polls", i.a.createElement(p.a, {
						to: m("reputation-and-governance")
					}, f._("Governance Polls", null, {
						hk: "3RulHW"
					})))], {
						hk: "bIeh3"
					})))], {
						hk: "1Kzh2q"
					}))), null),
					"spam-and-abuse": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("img", {
						className: b.a.smallTitleImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/spam.png`,
						alt: O._("Community Points can help fight spam", null, {
							hk: "9z9e5"
						})
					}), i.a.createElement("h1", null, O._("Spam & Abuse", null, {
						hk: "1qZ0Kk"
					})), i.a.createElement("h2", null, O._("Community Points give communities smarter ways to fight spam and other abuse by punishing detrimental behavior.", null, {
						hk: "3lfcQE"
					})), O._("{=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.}{=Example rules that can be created include:}{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}{=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.}{=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.}", [O._param("=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", i.a.createElement("p", null, O._("As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", null, {
						hk: "38WJLw"
					}))), O._param("=Example rules that can be created include:", i.a.createElement("p", null, O._("Example rules that can be created include:", null, {
						hk: "3eylqc"
					}))), O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("ul", null, O._("{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.}{=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.}{=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.}{=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}", [O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", i.a.createElement("li", null, O._("Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", null, {
						hk: "2tMNCa"
					}))), O._param("=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", i.a.createElement("li", null, O._("Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", null, {
						hk: "2fYsam"
					}))), O._param("=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", i.a.createElement("li", null, O._("Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", null, {
						hk: "1fte1B"
					}))), O._param("=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("li", null, O._("When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", null, {
						hk: "1qeR2Z"
					})))], {
						hk: "38hDgb"
					}))), O._param("=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", i.a.createElement("p", null, O._("The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", null, {
						hk: "3MTosY"
					}))), O._param("=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", i.a.createElement("p", null, O._("As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", null, {
						hk: "MzGJX"
					})))], {
						hk: "1jv9EK"
					})), null),
					"reputation-and-governance": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, B._("Reputation & Governance", null, {
						hk: "3VDDzY"
					})), i.a.createElement("h2", null, B._("Community Points represent a visible measure of reputation and enable a new type of weighted poll that can be used to make community decisions.", null, {
						hk: "Xc3Ow"
					})), B._("{=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.}", [B._param("=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.", i.a.createElement("p", null, B._("Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.", null, {
						hk: "3KLKLr"
					})))], {
						hk: "2ZBPoO"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Reputation", null, {
						hk: "2sh0G9"
					})), B._("{=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.}", [B._param("=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", i.a.createElement("p", null, B._("In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", null, {
						hk: "1zRy9m"
					})))], {
						hk: "2M3ArP"
					}), i.a.createElement("img", {
						className: b.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/reputation.png`,
						alt: B._("Example of how Community Points are displayed on comments", null, {
							hk: "3E0yXu"
						})
					}), B._("{=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.}", [B._param("=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", i.a.createElement("p", null, B._("Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", null, {
						hk: "1awSM9"
					})))], {
						hk: "EKs9F"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Weighted Polls", null, {
						hk: "4uCujA"
					})), B._("{=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.}{=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.}{=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.}", [B._param("=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", i.a.createElement("p", null, B._("People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", null, {
						hk: "1EHUpR"
					}))), B._param("=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", i.a.createElement("p", null, B._("To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", null, {
						hk: "28xEsW"
					}))), B._param("=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", i.a.createElement("p", null, B._("When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", null, {
						hk: "3i4Xw4"
					})))], {
						hk: "448Jqc"
					}), i.a.createElement("img", {
						className: b.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/poll.png`,
						alt: B._("Example of a community poll", null, {
							hk: "CC6Sa"
						})
					}), B._("{=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of tips, their vote weight is still only 200.}{=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.}{=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.}", [B._param("=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of tips, their vote weight is still only 200.", i.a.createElement("p", null, B._("Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of tips, their vote weight is still only 200.", null, {
						hk: "ckTbj"
					}))), B._param("=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", i.a.createElement("p", null, B._("Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", null, {
						hk: "I6Wy3"
					}))), B._param("=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", i.a.createElement("p", null, B._("Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", null, {
						hk: "410irp"
					})))], {
						hk: "3Bir5S"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Community Governance", null, {
						hk: "440sui"
					})), B._("{=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.}{=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.}{=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.}{=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.}", [B._param("=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", i.a.createElement("p", null, B._("Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", null, {
						hk: "2FyFSz"
					}))), B._param("=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", i.a.createElement("p", null, B._("Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", null, {
						hk: "LS6Tk"
					}))), B._param("=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", i.a.createElement("p", null, B._("The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", null, {
						hk: "3K5cOm"
					}))), B._param("=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.", i.a.createElement("p", null, B._("Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.", null, {
						hk: "3lh97y"
					})))], {
						hk: "40FHN1"
					}))), null),
					"special-memberships": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, D._("Special Memberships", null, {
						hk: "FgGID"
					})), i.a.createElement("h2", null, D._("Special Memberships let users show off their support to the community. Getting a Special Membership unlocks badges and other premium features in the community.", null, {
						hk: "4EV8yH"
					})), D._("{=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:}{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.}{=To see more details, check theSubreddit Membership page for r/CryptoCurrency.}", [D._param("=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", i.a.createElement("p", null, D._("Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", null, {
						hk: "2RjnSj"
					}))), D._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("ul", null, D._("{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.}{=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.}{=GIFs: Embed GIFs directly on Reddit, inside your comments.}", [D._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.", i.a.createElement("li", null, D._("{=Badges}: Personalize your presence on the subreddit and add a highlighted color to your username.", [D._param("=Badges", i.a.createElement("b", null, D._("Badges", null, {
						hk: "64JpW"
					})))], {
						hk: "1UlPKj"
					}))), D._param("=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.", i.a.createElement("li", null, D._("{=Animated emojis}: Express yourself in a way that words can't, with emojis customized to that subreddit.", [D._param("=Animated emojis", i.a.createElement("b", null, D._("Animated emojis", null, {
						hk: "3JlmnL"
					})))], {
						hk: "17LrM"
					}))), D._param("=GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("li", null, D._("{=GIFs}: Embed GIFs directly on Reddit, inside your comments.", [D._param("=GIFs", i.a.createElement("b", null, D._("GIFs", null, {
						hk: "1nCu3Q"
					})))], {
						hk: "1qkBxd"
					})))], {
						hk: "45xOov"
					}))), D._param("=To see more details, check theSubreddit Membership page for r/CryptoCurrency.", i.a.createElement("p", null, D._("To see more details, check the {=Subreddit Membership} page for r/CryptoCurrency.", [D._param("=Subreddit Membership", i.a.createElement("a", {
						href: "/web/special-membership/cryptocurrency",
						target: "_blank",
						rel: "noopener noreferrer"
					}, D._("Subreddit Membership", null, {
						hk: "2CT5r6"
					})))], {
						hk: "1cN7rt"
					})))], {
						hk: "YU1NC"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Badges & Emojis", null, {
						hk: "nhw27"
					})), i.a.createElement("div", {
						className: b.a.sideImageContainer
					}, i.a.createElement("div", null, D._('{=There are multiple badges that Special Members can display next to their username.}{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}{=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.}', [D._param("=There are multiple badges that Special Members can display next to their username.", i.a.createElement("p", null, D._("There are multiple badges that Special Members can display next to their username.", null, {
						hk: "38eZY8"
					}))), D._param('=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.', i.a.createElement("ul", null, D._('{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.}{=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).}{=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}', [D._param("=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.", i.a.createElement("li", null, D._("{=Loyalty Badge}: The first badge represents how long the user has been supporting the subreddit as a paying member.", [D._param("=Loyalty Badge", i.a.createElement("b", null, D._("Loyalty Badge", null, {
						hk: "4ACOXt"
					})))], {
						hk: "1jiQJi"
					}))), D._param('=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', i.a.createElement("li", null, D._('{=Achievement Badge}: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', [D._param("=Achievement Badge", i.a.createElement("b", null, D._("Achievement Badge", null, {
						hk: "3VjA3"
					})))], {
						hk: "2O48La"
					}))), D._param("=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", i.a.createElement("li", null, D._("{=Style Badge}: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", [D._param("=Style Badge", i.a.createElement("b", null, D._("Style Badge", null, {
						hk: "1UZzGn"
					})))], {
						hk: "3G44zo"
					})))], {
						hk: "3uCxSx"
					}))), D._param("=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", i.a.createElement("p", null, D._("For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", null, {
						hk: "4bju4t"
					})))], {
						hk: "3YpHOu"
					})), i.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/badges.png`,
						alt: D._("Example image of badges", null, {
							hk: "2J0eH9"
						})
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Special Membership Price & Other Ways to Buy", null, {
						hk: "3gOExN"
					})), i.a.createElement("img", {
						className: b.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/membership_price.png`,
						alt: D._("Special Memberships price and ways to buy", null, {
							hk: "3UQ0wL"
						})
					}), D._("{=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll}{=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.}{=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.}", [D._param("=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll", i.a.createElement("p", null, D._("The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using a {=Governance Poll}.", [D._param("=Governance Poll", i.a.createElement(p.a, {
						to: m("reputation-and-governance")
					}, D._("Governance Poll", null, {
						hk: "1oqJVk"
					})))], {
						hk: "3FNr3d"
					}))), D._param("=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.", i.a.createElement("p", null, D._("In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the {=Community Tank} to provide the Special Membership status on-chain.", [D._param("=Community Tank", i.a.createElement(p.a, {
						to: m("distribution-process")
					}, D._("Community Tank", null, {
						hk: "hyFA"
					})))], {
						hk: "22CL3n"
					}))), D._param("=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", i.a.createElement("p", null, D._("Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", null, {
						hk: "4Do4V4"
					})))], {
						hk: "33GVNw"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Canceling Special Memberships", null, {
						hk: "zyegE"
					})), D._("{=It depends on how you bought your Special Membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [D._param("=It depends on how you bought your Special Membership:", i.a.createElement("p", null, D._("It depends on how you bought your Special Membership:", null, {
						hk: "1RJTU5"
					}))), D._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, D._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [D._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [D._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, D._("https://www.reddit.com/settings/special", null, {
						hk: "1PDlKJ"
					})))], {
						hk: "4pz9Iy"
					}))), D._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, D._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
						hk: "4a7nol"
					}))), D._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
						hk: "45OGet"
					}))), D._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "nIifE"
					})))], {
						hk: "1F0Qej"
					})))], {
						hk: "1UAohK"
					}))), null),
					"coins-and-awards": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, d._("Coins & Awards", null, {
						hk: "4APvg2"
					})), i.a.createElement("h2", null, d._("Community Points can be used to give awards in the community.", null, {
						hk: "3Ey9Li"
					})), d._("{=Coins are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.}{=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.}{=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.}", [d._param("=Coins are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.", i.a.createElement("p", null, d._("{=Coins} are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.", [d._param("=Coins", i.a.createElement("a", {
						href: "/coins",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Coins", null, {
						hk: "2k61qZ"
					})))], {
						hk: "1eU9Wb"
					}))), d._param("=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", i.a.createElement("p", null, d._("Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", null, {
						hk: "qFECL"
					}))), d._param("=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", i.a.createElement("p", null, d._("Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", null, {
						hk: "13oDbA"
					})))], {
						hk: "11Y6y2"
					})), null),
					"redeeming-points": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, F._("Redeeming Points", null, {
						hk: "RP9Na"
					})), i.a.createElement("h2", null, F._("When Community Points are redeemed by spending them on premium features, they are destroyed and removed from circulation. This reduces the overall supply of Points and makes everyone else's slice of Points larger, thus rewarding the entire community.", null, {
						hk: "11FdJY"
					})), F._("{=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.}{=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.}{=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.}", [F._param("=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", i.a.createElement("p", null, F._("Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", null, {
						hk: "3SVvAg"
					}))), F._param("=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.", i.a.createElement("p", null, F._("When people buy premium features with dollars, for example {=Special Memberships}, an equivalent amount of Points are burned from the {=Community Tank} on behalf of that user.", [F._param("=Special Memberships", i.a.createElement(p.a, {
						to: m("special-memberships")
					}, F._("Special Memberships", null, {
						hk: "AWK4V"
					}))), F._param("=Community Tank", i.a.createElement(p.a, {
						to: m("distribution-process")
					}, F._("Community Tank", null, {
						hk: "1KuErL"
					})))], {
						hk: "44uupr"
					}))), F._param("=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.", i.a.createElement("p", null, F._("Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See the {=Developers} section for more information.", [F._param("=Developers", i.a.createElement(p.a, {
						to: m("developers")
					}, F._("Developers", null, {
						hk: "hdAFy"
					})))], {
						hk: "2h7Ael"
					})))], {
						hk: "1UBYiX"
					})), null),
					tipping: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, j._("Tipping", null, {
						hk: "2SJg5w"
					})), i.a.createElement("h2", null, j._("Community Points can be tipped to other community members for their contributions to the community.", null, {
						hk: "4bInOA"
					})), j._("{=If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.}", [j._param("=If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", i.a.createElement("p", null, j._("If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", null, {
						hk: "1VWiCc"
					})))], {
						hk: "19OPwT"
					}), i.a.createElement("img", {
						className: b.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/user_card.png`,
						alt: j._("Tipping Community Points", null, {
							hk: "2otVJZ"
						})
					})), null),
					"points-and-automoderator": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, N._("Points & Automoderator", null, {
						hk: "4qE8Kd"
					})), i.a.createElement("h2", null, N._("Community Points can be used in conjunction with Automoderator to create rules based on users' Points balances and Special Membership status.", null, {
						hk: "1id0Ri"
					})), i.a.createElement("p", null, N._("Subreddits can use Community Points information in their Automod rules. Specifically, they can use the following rules:", null, {
						hk: "2m6VU8"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor: has_special_membership: true | false\nspecial_membership_age: > 1 day\npoints_balance: > 10000000000000 # in wei\nlocked_points_balance: > 10000000000000 # in wei\n---")), i.a.createElement("p", null, N._("Locked points is the total number of Points the user has directly earned in the community to date.", null, {
						hk: "3B9CVv"
					})), i.a.createElement("h3", null, N._("Examples", null, {
						hk: "33UWVC"
					})), i.a.createElement("p", null, N._("Restrict commenting on a Core Contributors Discussion Thread only to Points holders.", null, {
						hk: "3r0Bj3"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: comment\naction: remove\n---\nauthor: automod\ntitle (starts-with): Core Contributors Discussion Thread\nset_flair: Discussion\n---")), i.a.createElement("p", null, N._("Put submissions from users with 0 balance into the mod queue.", null, {
						hk: "36MzYX"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: submission\naction: filter\nmessage_subject: Pending Approval\nmessage: Our apologies, but in order to limit spam your submission has been automatically removed and is pending moderator approval.\nmodmail_subject: Post From Young Account\nmodmail: /u/{{author}}'s [{{kind}}]({{permalink}}) is pending moderator approval. Please visit the moderation queue to review the post.\n---")), i.a.createElement("p", null, N._("Thank Special Members for supporting the community.", null, {
						hk: "43lDxM"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    has_special_membership: true\ntype: submission\ncomment_stickied: true\ncomment_locked: true\ncomment: {{author}}, thank you for supporting the community!\n---"))), null),
					vault: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, W._("Vault", null, {
						hk: "JRmsq"
					})), i.a.createElement("h2", null, W._("The Vault is an embedded crypto wallet in the Reddit app and the home for Community Points.", null, {
						hk: "u3o8z"
					})), W._("{=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.}{=In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.}{=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).}", [W._param("=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.", i.a.createElement("p", null, W._("Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.", null, {
						hk: "2oW65r"
					}))), W._param("=In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.", i.a.createElement("p", null, W._("In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.", null, {
						hk: "3ZpDnr"
					}))), W._param("=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", i.a.createElement("p", null, W._("The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", null, {
						hk: "Or0FC"
					})))], {
						hk: "4iSGcP"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Create a Vault", null, {
						hk: "1h3rBm"
					})), W._("{=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.}{=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.}{=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.}", [W._param("=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", i.a.createElement("p", null, W._("Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", null, {
						hk: "1XxPFd"
					}))), W._param("=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", i.a.createElement("p", null, W._("When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", null, {
						hk: "4h0atv"
					}))), W._param("=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", i.a.createElement("p", null, W._("This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", null, {
						hk: "1RTGVt"
					})))], {
						hk: "2QyHrm"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Backup & Recovery", null, {
						hk: "4f33gk"
					})), W._("{=You have two options to back up your private key.}{=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.}{=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.}{=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.}{=There are two corresponding ways to recover your Vault.}{=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.}{=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.}{=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.}", [W._param("=You have two options to back up your private key.", i.a.createElement("p", null, W._("You have two options to back up your private key.", null, {
						hk: "1FIBMf"
					}))), W._param("=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", i.a.createElement("p", null, W._("The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", null, {
						hk: "2VBUWJ"
					}))), W._param("=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.", i.a.createElement("p", null, W._("The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.", null, {
						hk: "DrBLW"
					}))), W._param("=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", i.a.createElement("p", null, W._("It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", null, {
						hk: "3oZe4I"
					}))), W._param("=There are two corresponding ways to recover your Vault.", i.a.createElement("p", null, W._("There are two corresponding ways to recover your Vault.", null, {
						hk: "jlR9X"
					}))), W._param("=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", i.a.createElement("p", null, W._("You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", null, {
						hk: "4xWnCz"
					}))), W._param("=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", i.a.createElement("p", null, W._("You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", null, {
						hk: "iuwnh"
					}))), W._param("=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.", i.a.createElement("p", null, W._("Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is {=finalized}. Every time you create or recover a Vault, it is immediately set as your active Vault.", [W._param("=finalized", i.a.createElement(p.a, {
						to: m("distribution-process")
					}, W._("finalized", null, {
						hk: "4ulHIk"
					})))], {
						hk: "2j04B5"
					})))], {
						hk: "28GGHl"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Using Vault on web", null, {
						hk: "4lZpy1"
					})), W._("{=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.}{=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.}{=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.}", [W._param("=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", i.a.createElement("p", null, W._("Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", null, {
						hk: "3Q0UIE"
					}))), W._param("=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", i.a.createElement("p", null, W._("When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", null, {
						hk: "1dq5v2"
					}))), W._param("=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", i.a.createElement("p", null, W._("If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", null, {
						hk: "1tITN"
					})))], {
						hk: "1xjedp"
					}))), null),
					"points-on-the-blockchain": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, A._("Points on the Blockchain", null, {
						hk: "2Fk8CU"
					})), i.a.createElement("h2", null, A._("What makes Community Points unique is that they live on a public blockchain. People's Points are theirs and can be used anywhere they want on the Internet where Points are supported.", null, {
						hk: "3ldDbf"
					})), i.a.createElement("p", null, A._("Community Points currently exist on a testnet version of the Ethereum blockchain, which uses similar technology to Bitcoin to validate ownership and control of tokens based on who holds them.", null, {
						hk: "28z53t"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("How does the blockchain work?", null, {
						hk: "2Ctp6v"
					})), A._("{=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.}{=The blockchain that Community Points live on is Ethereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.}{=On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.}{=Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their Vault and the address (along with everything it has in it) can only be controlled by them.}", [A._param("=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", i.a.createElement("p", null, A._("The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", null, {
						hk: "2nwu6u"
					}))), A._param("=The blockchain that Community Points live on is Ethereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", i.a.createElement("p", null, A._("The blockchain that Community Points live on is {=Ethereum}'s Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", [A._param("=Ethereum", i.a.createElement("a", {
						href: "https://ethereum.org/en/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("Ethereum", null, {
						hk: "1P2gav"
					})))], {
						hk: "3gSsUl"
					}))), A._param("=On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.", i.a.createElement("p", null, A._("On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.", null, {
						hk: "1fQl2"
					}))), A._param("=Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their Vault and the address (along with everything it has in it) can only be controlled by them.", i.a.createElement("p", null, A._("Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their {=Vault}, and the address (along with everything it has in it) can only be controlled by them.", [A._param("=Vault", i.a.createElement(p.a, {
						to: m("vault")
					}, A._("Vault", null, {
						hk: "3HO9Yh"
					})))], {
						hk: "TEmd4"
					})))], {
						hk: "2gCFJm"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("What are the benefits of the blockchain?", null, {
						hk: "1bEK24"
					})), A._("{=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:}{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}{=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.}", [A._param("=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", i.a.createElement("p", null, A._("Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", null, {
						hk: "32AhK6"
					}))), A._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("ul", null, A._("{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.}{=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.}{=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}", [A._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", i.a.createElement("li", null, A._("{=Ownership.} Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", [A._param("=Ownership.", i.a.createElement("b", null, A._("Ownership.", null, {
						hk: "2ryFKo"
					})))], {
						hk: "1g04uq"
					}))), A._param("=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", i.a.createElement("li", null, A._("{=Openness & Portability.} The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", [A._param("=Openness & Portability.", i.a.createElement("b", null, A._("Openness & Portability.", null, {
						hk: "1daOsT"
					})))], {
						hk: "227Qu6"
					}))), A._param("=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("li", null, A._("{=Transparency.} The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", [A._param("=Transparency.", i.a.createElement("b", null, A._("Transparency.", null, {
						hk: "3lEwhF"
					})))], {
						hk: "1ogHNQ"
					})))], {
						hk: "Hwv73"
					}))), A._param("=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.", i.a.createElement("p", null, A._("Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.", null, {
						hk: "1EWXOL"
					})))], {
						hk: "21DMJG"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("What is gas, and who's paying for it?", null, {
						hk: "5K69o"
					})), A._('{=Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.}', [A._param('=Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.', i.a.createElement("p", null, A._('Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.', null, {
						hk: "3WUT11"
					})))], {
						hk: "1fwKbD"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("Which Ethereum network is this using?", null, {
						hk: "1vDpUR"
					})), A._("{=Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's Previews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.}", [A._param("=Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's Previews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.", i.a.createElement("p", null, A._("Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's {=Previews Terms of Service}. This kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.", [A._param("=Previews Terms of Service", i.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("Previews Terms of Service", null, {
						hk: "3GtJHJ"
					})))], {
						hk: "1ArmWr"
					})))], {
						hk: "byLMP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("What is the scaling problem and how does it impact plans for mainnet?", null, {
						hk: "48T8Tr"
					})), A._("{=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.}{=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.}{=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.}", [A._param("=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", i.a.createElement("p", null, A._("Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", null, {
						hk: "33CyaZ"
					}))), A._param("=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.", i.a.createElement("p", null, A._("To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We have {=partnered} with the Ethereum Foundation in these efforts.", [A._param("=partnered", i.a.createElement("a", {
						href: "/r/ethereum/comments/l6c3kx/reddit_announces_partnership_with_the_ethereum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("partnered", null, {
						hk: "3RaXQ7"
					})))], {
						hk: "2Y2npj"
					}))), A._param("=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", i.a.createElement("p", null, A._("In 2020, we issued a {=call to the crypto community} to present their best scaling options for Community Points. In 2021, we {=launched} a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", [A._param("=call to the crypto community", i.a.createElement("a", {
						href: "/r/ethereum/comments/hbjx25/the_great_reddit_scaling_bakeoff/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("call to the crypto community", null, {
						hk: "2riJMB"
					}))), A._param("=launched", i.a.createElement("a", {
						href: "/r/ethereum/comments/opi5rg/scaling_reddits_community_points_with_arbitrum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("launched", null, {
						hk: "1yIBHY"
					})))], {
						hk: "3q5Wzy"
					})))], {
						hk: "LIGUz"
					}))), null),
					developers: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, h._("Developers", null, {
						hk: "4o6AOj"
					})), i.a.createElement("h2", null, h._("Developers can build on top of Community Points today. Make bots that work with Community Points or embed Community Points in apps outside of Reddit.", null, {
						hk: "3KXAiI"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, h._("Blockchain Resources", null, {
						hk: "325QLM"
					})), h._("{=Developers can interact directly with Community Points through standard blockchain tools and protocols.}{=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.}", [h._param("=Developers can interact directly with Community Points through standard blockchain tools and protocols.", i.a.createElement("p", null, h._("Developers can interact directly with Community Points through standard blockchain tools and protocols.", null, {
						hk: "J3pfL"
					}))), h._param("=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", i.a.createElement("p", null, h._("For developers who are new to blockchain, the {=Ethereum developer docs} are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", [h._param("=Ethereum developer docs", i.a.createElement("a", {
						href: "https://ethereum.org/en/developers/docs/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("Ethereum developer docs", null, {
						hk: "2b5HuB"
					})))], {
						hk: "3B8i3p"
					})))], {
						hk: "1QXjde"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, h._("Scaling Network", null, {
						hk: "4zK8vP"
					})), h._("{=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.}{=To interact with the scaling network, developers can use the following resources:}{=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184}", [h._param("=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.", i.a.createElement("p", null, h._("Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. {=Arbitrum} is compatible with most Ethereum tools.", [h._param("=Arbitrum", i.a.createElement("a", {
						href: "http://arbitrum.io/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("Arbitrum", null, {
						hk: "4CYQBO"
					})))], {
						hk: "2vaWLm"
					}))), h._param("=To interact with the scaling network, developers can use the following resources:", i.a.createElement("p", null, h._("To interact with the scaling network, developers can use the following resources:", null, {
						hk: "3jTnIk"
					}))), h._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184", i.a.createElement("ul", null, h._("{=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}{=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.}{=Chain ID: 5391184}", [h._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("li", null, h._("JSON-RPC endpoint: {=https://testnet.redditspace.com/rpc}{=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [h._param("=https://testnet.redditspace.com/rpc", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/rpc",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("https://testnet.redditspace.com/rpc", null, {
						hk: "46rOfv"
					}))), h._param("=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("ul", null, h._("{=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [h._param("=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("li", null, h._("This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contact {=spsupport@reddit.com} for more details.", [h._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, h._("spsupport@reddit.com", null, {
						hk: "15awl0"
					})))], {
						hk: "4lrhg2"
					})))], {
						hk: "1DSYzb"
					})))], {
						hk: "2C74qj"
					}))), h._param("=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, h._("Block Explorer: {=https://testnet.redditspace.com/}{=This is an interface to see transactions and balances on the scaling network.}", [h._param("=https://testnet.redditspace.com/", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("https://testnet.redditspace.com/", null, {
						hk: "4ujbtE"
					}))), h._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("ul", null, h._("{=This is an interface to see transactions and balances on the scaling network.}", [h._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, h._("This is an interface to see transactions and balances on the scaling network.", null, {
						hk: "2d5tTE"
					})))], {
						hk: "2TNfnf"
					})))], {
						hk: "1eJSrX"
					}))), h._param("=Chain ID: 5391184", i.a.createElement("li", null, h._("Chain ID: 5391184", null, {
						hk: "1e7MEj"
					})))], {
						hk: "2qc9lq"
					})))], {
						hk: "bxrUP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, h._("Smart Contracts", null, {
						hk: "1vFnYB"
					})), h._("{=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.}{=As a reference, here is the contract code from implementation contracts on our scaling network:}{=SubredditPoints.solSubscriptions.solDistributions.sol}{=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.}", [h._param("=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", i.a.createElement("p", null, h._("Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", null, {
						hk: "20FdUA"
					}))), h._param("=As a reference, here is the contract code from implementation contracts on our scaling network:", i.a.createElement("p", null, h._("As a reference, here is the contract code from implementation contracts on our scaling network:", null, {
						hk: "37CvLk"
					}))), h._param("=SubredditPoints.solSubscriptions.solDistributions.sol", i.a.createElement("ul", null, h._("{=SubredditPoints.sol}{=Subscriptions.sol}{=Distributions.sol}", [h._param("=SubredditPoints.sol", i.a.createElement("li", null, h._("{=SubredditPoints.sol}", [h._param("=SubredditPoints.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xb1ff5e09AbFD975bedEAf9F3858F0B14c4876E30/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("SubredditPoints.sol", null, {
						hk: "2ACF9O"
					})))], {
						hk: "cIW9L"
					}))), h._param("=Subscriptions.sol", i.a.createElement("li", null, h._("{=Subscriptions.sol}", [h._param("=Subscriptions.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xaF6bf4c56cB5e4D64b65049be9E188b1f8Cf8448/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("Subscriptions.sol", null, {
						hk: "G6Qcv"
					})))], {
						hk: "3r0g3Z"
					}))), h._param("=Distributions.sol", i.a.createElement("li", null, h._("{=Distributions.sol}", [h._param("=Distributions.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0x22037C488520DF547c2cd2AA0BE70517082BDA1C/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("Distributions.sol", null, {
						hk: "2delWk"
					})))], {
						hk: "284ehF"
					})))], {
						hk: "2r8LKN"
					}))), h._param("=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", i.a.createElement("p", null, h._("When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", null, {
						hk: "3E3J1d"
					})))], {
						hk: "4wel7O"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, h._("Community Points API", null, {
						hk: "2HYKPs"
					})), i.a.createElement("p", null, h._("To get users' addresses and balances, you can use this API.", null, {
						hk: "3fql24"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "GET https://meta-api.reddit.com/wallets/{subredditId}\n\nParams:\n@subredditId: Path parameter. The t5_* ID of the subreddit. It can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_r_{subreddit}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/r/{subreddit}/about"), ".", "\n@userIds: Query parameter. Comma-separated list of user IDs in t2_* format. These IDs can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_user_{username}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/user/{username}/about"))), i.a.createElement("p", null, h._("For example:", null, {
						hk: "2DPko9"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, 'GET https://meta-api.reddit.com/wallets/t5_2wlj3?userIds=t2_test1,t2_test2\n\nReturns:\n{\n  "t2_test1": {\n    "amount": "50535317008090965261",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "50535317008090965261",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0x01d175F6281F65b10205575B728d863f9cEa1924"\n  },\n  "t2_test2": {\n    "amount": "2306138031105478375111",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "2306138031105478375111",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0xf847bB2AB11F395e909D87cEAf241d071CDEF8b1"\n  }\n}\n')), h._("{=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).}{=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.}", [h._param("=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", i.a.createElement("p", null, h._("Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", null, {
						hk: "zbzLN"
					}))), h._param("=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", i.a.createElement("p", null, h._("For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", null, {
						hk: "2UzG0Z"
					})))], {
						hk: "2XOMZr"
					}))), null),
					faqs: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, w._("Frequently Asked Questions", null, {
						hk: "43ocB2"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("Why is Reddit doing this?", null, {
						hk: "350rGF"
					})), w._("{=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!}", [w._param("=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", i.a.createElement("p", null, w._("Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", null, {
						hk: "2KBHuF"
					})))], {
						hk: "VBuiX"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("Isn't crypto terrible for the environment?", null, {
						hk: "If5nI"
					})), w._('{=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy}{=In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.}', [w._param("=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy", i.a.createElement("p", null, w._("Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses {=99.95% less energy}.", [w._param("=99.95% less energy", i.a.createElement("a", {
						href: "https://blog.ethereum.org/2021/05/18/country-power-no-more/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("99.95% less energy", null, {
						hk: "EFiAO"
					})))], {
						hk: "1MMS3T"
					}))), w._param('=In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', i.a.createElement("p", null, w._('In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', null, {
						hk: "4cgFwi"
					})))], {
						hk: "2VPvOC"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("Why didn't I get Points?", null, {
						hk: "2AOZSW"
					})), w._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!}', [w._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!', i.a.createElement("ol", null, w._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}{=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}{=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}{=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}{=If a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!}', [w._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, w._('Go to your subreddit and look for the most recent post from u/CommunityPoints. {=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [w._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("ol", null, w._('{=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [w._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, w._('If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', null, {
						hk: "3WB6M9"
					})))], {
						hk: "p7xJY"
					})))], {
						hk: "2d9ZcL"
					}))), w._param('=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.', i.a.createElement("li", null, w._('If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. {=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}', [w._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("ol", null, w._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [w._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("li", null, w._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.}{=Keep in mind that your own votes don't give you karma.}{=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [w._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", i.a.createElement("p", null, w._("If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", null, {
						hk: "37meTZ"
					}))), w._param("=Keep in mind that your own votes don't give you karma.", i.a.createElement("p", null, w._("Keep in mind that your own votes don't give you karma.", null, {
						hk: "4FduIk"
					}))), w._param("=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("p", null, w._("You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", null, {
						hk: "40GDKf"
					})))], {
						hk: "3CDHcp"
					})))], {
						hk: "3qFGlR"
					})))], {
						hk: "3ucB8a"
					}))), w._param('=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("li", null, w._('If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". {=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [w._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("ol", null, w._('{=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.}{=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [w._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', i.a.createElement("li", null, w._('If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', null, {
						hk: "3ihHF3"
					}))), w._param('=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("li", null, w._('If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at {=spsupport@reddit.com} in case there are delays.', [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "4mXeGC"
					})))], {
						hk: "2JcVV5"
					})))], {
						hk: "pEY4R"
					})))], {
						hk: "1lpU59"
					}))), w._param('=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault', i.a.createElement("li", null, w._('If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. {=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}', [w._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, w._("{=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [w._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("li", null, w._("If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: {=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [w._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, w._("{=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page}{=Sign out of your current Vault}{=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address}{=Send the Points in the old Vault to the address you copied for the new Vault}{=Sign out of the old Vault and recover the new Vault}", [w._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", i.a.createElement("li", null, w._("Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", null, {
						hk: "3jzbmB"
					}))), w._param("=Sign out of your current Vault", i.a.createElement("li", null, w._("Sign out of your current Vault", null, {
						hk: "lNzpP"
					}))), w._param("=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", i.a.createElement("li", null, w._("Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", null, {
						hk: "1RgeKw"
					}))), w._param("=Send the Points in the old Vault to the address you copied for the new Vault", i.a.createElement("li", null, w._("Send the Points in the old Vault to the address you copied for the new Vault", null, {
						hk: "1coX8U"
					}))), w._param("=Sign out of the old Vault and recover the new Vault", i.a.createElement("li", null, w._("Sign out of the old Vault and recover the new Vault", null, {
						hk: "4Gfh3x"
					})))], {
						hk: "17jEZy"
					})))], {
						hk: "4wgWLw"
					})))], {
						hk: "zgpqU"
					})))], {
						hk: "4fdF26"
					}))), w._param("=If a) the address in the CSV matches your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We'll be happy to take a look!", i.a.createElement("li", null, w._("If a) the address in the CSV matches your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support at {=spsupport@reddit.com} with your username and everything you have checked so far. We'll be happy to take a look!", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "23maVV"
					})))], {
						hk: "3EFF67"
					})))], {
						hk: "49peHE"
					})))], {
						hk: "4tOQ7Z"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("How do I cancel my Special Membership?", null, {
						hk: "xyJU9"
					})), w._("{=It depends on how you bought your membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [w._param("=It depends on how you bought your membership:", i.a.createElement("p", null, w._("It depends on how you bought your membership:", null, {
						hk: "Fjdqz"
					}))), w._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, w._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [w._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, w._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [w._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("https://www.reddit.com/settings/special", null, {
						hk: "yRGwB"
					})))], {
						hk: "1I2Ufp"
					}))), w._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, w._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
						hk: "3imBhX"
					}))), w._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, w._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
						hk: "325BV7"
					}))), w._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, w._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "3KdlJw"
					})))], {
						hk: "1TAfIY"
					})))], {
						hk: "3mzCJw"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("Help! I've lost my Recovery Phrase and/or Vault Password, can you reset my Vault for me?", null, {
						hk: "3CQUe7"
					})), w._("{=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.}{=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.}", [w._param("=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", i.a.createElement("p", null, w._("Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", null, {
						hk: "3G2izr"
					}))), w._param("=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", i.a.createElement("p", null, w._("Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", null, {
						hk: "37f9e8"
					})))], {
						hk: "3maDCP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("What if I get banned? What happens to my Points or my Special Membership?", null, {
						hk: "4cvjGM"
					})), i.a.createElement("p", null, w._("Your existing Points will forever remain on your Ethereum account, but you will get locked out of Vault. You'll also stop receiving distributions, and any Special Membership renewals will be cancelled.", null, {
						hk: "VE9mN"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, w._("I don't see Vault in the app.", null, {
						hk: "1Dg0cD"
					})), w._("{=Vault will appear in the left drawer when you meet one of the following conditions:}{=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points}{=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.}{=If you are still having trouble, please reach out to us at spsupport@reddit.com}", [w._param("=Vault will appear in the left drawer when you meet one of the following conditions:", i.a.createElement("p", null, w._("Vault will appear in the left drawer when you meet one of the following conditions:", null, {
						hk: "2MsMEt"
					}))), w._param("=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points", i.a.createElement("ul", null, w._("{=Have unclaimed Points}{=Have a non-zero Points amount}{=Subscribed to a subreddit with Community Points}", [w._param("=Have unclaimed Points", i.a.createElement("li", null, w._("Have unclaimed Points", null, {
						hk: "hI3Hy"
					}))), w._param("=Have a non-zero Points amount", i.a.createElement("li", null, w._("Have a non-zero Points amount", null, {
						hk: "42XttM"
					}))), w._param("=Subscribed to a subreddit with Community Points", i.a.createElement("li", null, w._("Subscribed to a subreddit with Community Points", null, {
						hk: "CMFPv"
					})))], {
						hk: "MHuQT"
					}))), w._param("=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", i.a.createElement("p", null, w._("Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", null, {
						hk: "iiwJ6"
					}))), w._param("=If you are still having trouble, please reach out to us at spsupport@reddit.com", i.a.createElement("p", null, w._("If you are still having trouble, please reach out to us at {=spsupport@reddit.com}.", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "22LkwP"
					})))], {
						hk: "3Afq8V"
					})))], {
						hk: "2xC49i"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("I'm not seeing my Points on my account.", null, {
						hk: "2NxZoE"
					})), w._("{=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out tospsupport@reddit.com}{=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.}{=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:}{=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase}", [w._param("=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out tospsupport@reddit.com", i.a.createElement("p", null, w._("If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out to {=spsupport@reddit.com}.", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "1dCdE4"
					})))], {
						hk: "2ouRW"
					}))), w._param("=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", i.a.createElement("p", null, w._("Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", null, {
						hk: "3WlyDb"
					}))), w._param("=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", i.a.createElement("p", null, w._("If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", null, {
						hk: "NrvIV"
					}))), w._param("=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase", i.a.createElement("ul", null, w._("{=Go to Vault → Settings}{=Tap on Log Out}{=Select your old Vault address from the list}{=Recover using Reddit Backup or a Recovery Phrase}", [w._param("=Go to Vault → Settings", i.a.createElement("li", null, w._("Go to Vault → Settings", null, {
						hk: "1jVHBp"
					}))), w._param("=Tap on Log Out", i.a.createElement("li", null, w._("Tap on Log Out", null, {
						hk: "2Qpk7d"
					}))), w._param("=Select your old Vault address from the list", i.a.createElement("li", null, w._("Select your old Vault address from the list", null, {
						hk: "1CXNFk"
					}))), w._param("=Recover using Reddit Backup or a Recovery Phrase", i.a.createElement("li", null, w._("Recover using Reddit Backup or a Recovery Phrase", null, {
						hk: "4h9mKi"
					})))], {
						hk: "3MbDfS"
					})))], {
						hk: "3hEtul"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("I got charged for a Special Membership but I haven't received it.", null, {
						hk: "bhcQn"
					})), i.a.createElement("p", null, w._("Please reach out to us at {=spsupport@reddit.com}.", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "26QlJV"
					})))], {
						hk: "CvFCR"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, w._("I converted my Points into Reddit Coins, but I don't want them anymore. Can you revert the transaction?", null, {
						hk: "RDin6"
					})), i.a.createElement("p", null, w._("This is not possible. Conversion into Coins is final and cannot be reversed, since Points are burned in the process.", null, {
						hk: "1RwfEY"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, w._("How do I delete my Vault?", null, {
						hk: "1b4Gqs"
					})), w._("{=You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Settings → Sign out.}{=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com}", [w._param("=You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Settings → Sign out.", i.a.createElement("p", null, w._("You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Settings → Sign out.", null, {
						hk: "SBRlk"
					}))), w._param("=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com", i.a.createElement("p", null, w._("If you wish to completely delete your Vault, please reach out to us at {=spsupport@reddit.com}.", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "2R1R8m"
					})))], {
						hk: "MrsRt"
					})))], {
						hk: "44M9WG"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("I haven't found my answer. How do I get support?", null, {
						hk: "1iLsnr"
					})), i.a.createElement("p", null, w._("If you have questions, please reach out to us at {=spsupport@reddit.com}.", [w._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, w._("spsupport@reddit.com", null, {
						hk: "DjyKg"
					})))], {
						hk: "3CbI5h"
					})))), null)
				};
			var z = o("./src/reddit/icons/svgs/Snoo/index.tsx"),
				H = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less"),
				q = o.n(H);
			const {
				fbt: K
			} = o("./node_modules/fbt/lib/FbtPublic.js"), U = () => i.a.createElement("div", {
				className: q.a.container
			}, i.a.createElement("footer", {
				className: q.a.content
			}, i.a.createElement(z.a, {
				className: q.a.logo
			}), i.a.createElement("span", {
				className: q.a.copyright
			}, K._("© 2021 Reddit, Inc.", null, {
				hk: "2AJJq2"
			})), i.a.createElement("span", {
				className: q.a.spacer
			}), i.a.createElement(p.a, {
				className: q.a.link,
				to: m("introduction")
			}, K._("Community Points Documentation", null, {
				hk: "KW8cc"
			})), i.a.createElement("span", {
				className: q.a.spacer
			}), i.a.createElement("a", {
				className: q.a.link,
				href: "https://www.redditinc.com/policies/previews-terms",
				target: "_blank",
				rel: "noopener noreferrer"
			}, K._("Previews Terms of Use", null, {
				hk: "4lPHBN"
			}))));
			var J = o("./src/lib/loadableAction/index.ts"),
				X = o("./src/reddit/controls/Button/index.tsx"),
				Q = o("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Z = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less"),
				$ = o.n(Z);
			const ee = () => {
					const e = Object(C.d)(),
						t = Object(C.e)(S.db);
					return i.a.createElement("header", {
						className: Object(s.a)($.a.container, {
							[$.a.nightmode]: t
						})
					}, i.a.createElement(p.a, {
						"aria-label": V.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: $.a.logo,
						to: "/",
						onClick: () => e(Object(J.a)(() => Promise.all([o.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), o.e("Frontpage")]).then(o.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
					}, i.a.createElement(z.a, {
						className: $.a.snoo
					}), i.a.createElement(Q.a, {
						className: $.a.wordmark
					})), i.a.createElement("div", {
						className: $.a.sections
					}, te.map(e => {
						let {
							displayText: t,
							link: o
						} = e;
						return i.a.createElement("a", {
							href: o,
							key: t,
							className: $.a.sectionText
						}, t)
					})), i.a.createElement(X.t, {
						className: $.a.joinWaitlist,
						priority: X.c.Secondary,
						kind: X.b.ExternalLink,
						href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
						target: "_blank",
						rel: "noopener noreferrer"
					}, V.fbt._("Join Waitlist", null, {
						hk: "4rpEy2"
					})))
				},
				te = [{
					displayText: V.fbt._("Token", null, {
						hk: "3pTjX0"
					}),
					link: "/community-points/#token"
				}, {
					displayText: V.fbt._("Benefits", null, {
						hk: "2J9q91"
					}),
					link: "/community-points/#benefits"
				}, {
					displayText: V.fbt._("Features", null, {
						hk: "31VVaC"
					}),
					link: "/community-points/#features"
				}, {
					displayText: V.fbt._("Vault", null, {
						hk: "3pQLt1"
					}),
					link: "/community-points/#vault"
				}, {
					displayText: V.fbt._("Future", null, {
						hk: "39h3VE"
					}),
					link: "/community-points/#future"
				}, {
					displayText: V.fbt._("Enroll", null, {
						hk: "3ZbEx3"
					}),
					link: "/community-points/#enroll"
				}, {
					displayText: V.fbt._("Documentation", null, {
						hk: "3BxUWp"
					}),
					link: m("introduction")
				}];
			var oe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				ne = o.n(oe);
			const {
				fbt: ae
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ie = e => {
				let {
					className: t,
					data: o,
					anchorId: n,
					isExpanded: a,
					isHidden: r,
					onClickExpand: l,
					onClickHide: u
				} = e;
				const c = Object(C.e)(S.db);
				return i.a.createElement("div", {
					className: Object(s.a)(ne.a.container, t, {
						[ne.a.expanded]: a,
						[ne.a.hidden]: r,
						[ne.a.nightmode]: c
					})
				}, n && i.a.createElement(tt, {
					anchorId: n
				}), i.a.createElement("div", {
					className: ne.a.imageSection,
					style: {
						backgroundColor: o.backgroundColor
					}
				}, i.a.createElement("img", {
					className: Object(s.a)(ne.a.image, {
						[ne.a.expanded]: a
					}),
					src: o.imageSrc,
					alt: o.title
				})), i.a.createElement("div", {
					className: Object(s.a)(ne.a.textSection, {
						[ne.a.expanded]: a,
						[ne.a.nightmode]: c
					})
				}, i.a.createElement("h5", {
					className: ne.a.title
				}, o.title), i.a.createElement("p", {
					className: ne.a.subtitle
				}, o.subtitle), a && i.a.createElement("p", {
					className: ne.a.body
				}, o.body), i.a.createElement("button", {
					onClick: a ? u : l,
					className: Object(s.a)(ne.a.expandButton, {
						[ne.a.expanded]: a
					}),
					"aria-label": a ? ae._("Collapse", null, {
						hk: "LToWq"
					}) : ae._("Expand", null, {
						hk: "4jMW0g"
					})
				}, i.a.createElement(k.a, {
					name: "add",
					className: Object(s.a)(ne.a.plusIcon, {
						[ne.a.expanded]: a
					})
				}))))
			};
			var re = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				se = o.n(re);
			const {
				fbt: le
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ue = e => {
				let {
					className: t
				} = e;
				const [o, n] = Object(a.useState)(null), [r, l] = Object(a.useState)(null);
				return Object(a.useEffect)(() => {
					if (null === r) return;
					const e = document.getElementById(ce(r));
					if (!e) return;
					const t = e.getBoundingClientRect().top;
					(t < 0 || t > window.innerHeight) && e.scrollIntoView({
						behavior: "smooth",
						block: "start"
					}), l(null)
				}, [r]), i.a.createElement("div", {
					className: t
				}, i.a.createElement(tt, {
					anchorId: "benefits"
				}), i.a.createElement("h2", {
					className: se.a.title
				}, le._("Take your community to the next level", null, {
					hk: "PqrYm"
				})), i.a.createElement("div", {
					className: Object(s.a)(se.a.benefitsContainer, {
						[se.a.expanded]: null !== o
					})
				}, me.map((e, t) => i.a.createElement(ie, {
					key: t,
					data: e,
					anchorId: ce(t),
					isExpanded: null !== o && t === o,
					isHidden: null !== o && t !== o,
					onClickExpand: () => {
						n(t), l(t)
					},
					onClickHide: () => {
						n(null), l(t)
					}
				}))))
			}, ce = e => `expandable-text-${e}`, me = [{
				title: le._("Reward the community, for real", null, {
					hk: "26o9ra"
				}),
				subtitle: le._("Earn something valuable for all the hours you put into your community.", null, {
					hk: "SQfOp"
				}),
				body: le._("Community Points are a way for Redditors to own a piece of their favorite communities. Moderators and content creators earn Points by contributing to the community, and they can spend their Points on special features, display their Points as reputation in the community, and vote with their Points to weigh in on community decisions.", null, {
					hk: "Xdxas"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reward_the_community_v3.png`,
				backgroundColor: "#E2D399"
			}, {
				title: le._("Unlock special features", null, {
					hk: "49hRJ2"
				}),
				subtitle: le._("Buy community features with Community Points, like Special Memberships and awards.", null, {
					hk: "11dSn1"
				}),
				body: le._("Community Points unlock special features in subreddits that adopt them. For example, they can be used to purchase Special Memberships, which give users access to community-themed badges, highlighted usernames, and the ability to embed rich media in their comments. Or they can be converted to Coins that can be used in the subreddit to give out awards.", null, {
					hk: "19OcvD"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/premium_features_v3.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: le._("Encourage better content and conversation", null, {
					hk: "3EKFJU"
				}),
				subtitle: le._("Use Community Points as an incentive to shape content and behavior in your community.", null, {
					hk: "3fIFZj"
				}),
				body: le._("Community Points introduce a powerful incentive system that communities can customize to their needs. Want to see more long-form text posts and comments? Reward this kind of content more. Want to see fewer low-effort memes? Give out fewer Points for them. (Or reward memes even more, it&apos;s up to you and your community!)", null, {
					hk: "3rbD1b"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/hq_content_v3.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: le._("Empower the community", null, {
					hk: "4xbWZA"
				}),
				subtitle: le._("Use polls to let the community weigh in on important decisions, including how Community Points should be distributed.", null, {
					hk: "S9sAC"
				}),
				body: le._("Subreddits can create polls where votes are weighted according to how many Points users have earned in the community. Instead of seeing only the loudest comments, measure how long-term members actually feel and use this mechanism to evolve how your community makes decisions.", null, {
					hk: "SD836"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/get_input_v3.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: le._("Use Points as a flexible tool", null, {
					hk: "16j4nt"
				}),
				subtitle: le._("Give out Points as prizes for events and contests and integrate Points with community bots such as Automod.", null, {
					hk: "4qJAr"
				}),
				body: le._("Points are a flexible tool you can use for many purposes in your community. Community Points can be prizes for community events, such as a trivia thread. Points can also be used with community bots, including Automod, to do things like host a discussion thread only for core community contributors or thank Special Members when they make a post.", null, {
					hk: "2dx02y"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/community_together_v3.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: le._("Customize your Points", null, {
					hk: "4jECbt"
				}),
				subtitle: le._("Each subreddit creates its own Community Points token, with a custom name and symbol.", null, {
					hk: "2hgheb"
				}),
				body: le._("Every subreddit&apos;s Community Points are unique to it, with a name chosen by the community and a symbol to match. These tokens live on the blockchain, which means they are owned and controlled fully by the community.", null, {
					hk: "lbmXo"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/customize_points_v3.png`,
				backgroundColor: "#DDDDDD"
			}];
			var de = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				he = o.n(de);
			const {
				fbt: pe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ye = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(he.a.container, t)
				}, i.a.createElement(tt, {
					anchorId: "token"
				}), i.a.createElement("div", {
					className: he.a.mainSceneMaxWidthContainer
				}, i.a.createElement("div", {
					className: he.a.mainSceneContainer
				}, i.a.createElement("picture", {
					className: he.a.mainScene
				}, i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v2.mov`,
					type: "video/mp4"
				}), i.a.createElement("source", {
					media: "(min-width: 868px)",
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v3.webp`,
					type: "image/webp"
				}), i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_mobile_v3.webp`,
					type: "image/webp"
				}), i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static_v2.png`,
					type: "image/png"
				}), i.a.createElement("img", {
					alt: pe._("Community Points Hero Image", null, {
						hk: "28I6Y4"
					}),
					className: he.a.fallbackStaticImage,
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static.png`
				})))), i.a.createElement("h3", {
					className: he.a.title
				}, pe._("Community Points {=[beta]}", [pe._param("=[beta]", i.a.createElement("sup", {
					className: he.a.super
				}, pe._("[beta]", null, {
					hk: "LPmnm"
				})))], {
					hk: "2yMt7C"
				})), i.a.createElement("h2", {
					className: he.a.subtitle
				}, pe._("Own a piece of your community", null, {
					hk: "xjmHz"
				})), i.a.createElement("p", {
					className: he.a.bodyText
				}, pe._("Add a custom token to your subreddit. Earn rewards, encourage quality content, and unlock special features.", null, {
					hk: "2JXihD"
				})), i.a.createElement(X.t, {
					className: he.a.waitlistButton,
					priority: X.c.Primary,
					kind: X.b.ExternalLink,
					href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
					target: "_blank",
					rel: "noopener noreferrer"
				}, pe._("Join Waitlist", null, {
					hk: "4rpEy2"
				})))
			};
			var be = o("./src/higherOrderComponents/asModal/index.tsx"),
				ge = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				fe = o("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				we = o("./src/reddit/selectors/economics.ts"),
				ke = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				ve = o.n(ke);

			function Pe(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return `${n.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var _e = function(e) {
					let {
						className: t,
						onComplete: o
					} = e;
					const [n, r] = Object(a.useState)(0), l = Object(C.e)(we.m), u = l && l.learnMore.pages || [], c = u.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), m = e => {
						r(e), e + 1 === u.length && o()
					};
					return i.a.createElement("div", {
						className: Object(s.a)(ve.a.carousel, t)
					}, i.a.createElement("div", {
						className: ve.a.imageContainer
					}, u.map((e, t) => i.a.createElement("img", {
						src: Pe(t),
						srcSet: `${Pe(t,!1)}, ${Pe(t)} 2x`,
						className: Object(s.a)(ve.a.image, {
							[ve.a.before]: t < n,
							[ve.a.active]: t === n,
							[ve.a.after]: t > n
						}),
						key: t
					}))), i.a.createElement("div", {
						className: ve.a.textContainer
					}, i.a.createElement("div", {
						className: ve.a.hiddenText
					}, i.a.createElement("div", {
						className: ve.a.slideTitle
					}, u[0] && u[0].title), c), u.map((e, t) => i.a.createElement("div", {
						className: Object(s.a)(ve.a.text, {
							[ve.a.before]: t < n,
							[ve.a.active]: t === n,
							[ve.a.after]: t > n
						}),
						key: t
					}, i.a.createElement("div", {
						className: ve.a.slideTitle
					}, e.title), e.body))), i.a.createElement("div", {
						className: ve.a.pager
					}, u.map((e, t) => i.a.createElement("button", {
						key: t,
						onClick: () => m(t)
					}, i.a.createElement("div", {
						className: Object(s.a)(ve.a.progressDot, {
							[ve.a.active]: t === n
						})
					}))), u.length > 0 && i.a.createElement("button", {
						"aria-label": "Next",
						className: Object(s.a)(ve.a.nextButton, {
							[ve.a.hidden]: n === u.length - 1
						}),
						onClick: () => m(n + 1)
					}, i.a.createElement(fe.a, {
						className: ve.a.arrowIcon
					}))))
				},
				Ee = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less"),
				Ce = o.n(Ee);
			const Se = Object(be.a)(e => {
				let {
					onClose: t
				} = e;
				return i.a.createElement("div", {
					className: Ce.a.container
				}, i.a.createElement(ge.a, {
					onClick: t,
					highContrast: !0
				}), i.a.createElement(_e, {
					onComplete: () => {}
				}))
			});
			var Ve = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				Ie = o.n(Ve);
			const {
				fbt: Te
			} = o("./node_modules/fbt/lib/FbtPublic.js"), xe = e => {
				let {
					className: t
				} = e;
				const [o, r] = Object(a.useState)(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(t, Ie.a.container)
				}, i.a.createElement(tt, {
					anchorId: "future"
				}), i.a.createElement("img", {
					className: Ie.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/crypto_future_v3.png`,
					alt: Te._("Imagine a crypto future", null, {
						hk: "2fm7jC"
					})
				}), i.a.createElement("div", {
					className: Ie.a.textContainer
				}, i.a.createElement("h3", {
					className: Ie.a.title
				}, Te._("Step into the crypto future", null, {
					hk: "4kMpHZ"
				})), i.a.createElement("div", {
					className: Ie.a.body
				}, Te._("{=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.}", [Te._param("=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", i.a.createElement("p", null, Te._("Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "24YdSx"
				}))), Te._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", i.a.createElement("p", null, Te._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", null, {
					hk: "1IBSEK"
				})))], {
					hk: "3dfbBB"
				})), i.a.createElement(X.t, {
					Icon: Object(k.b)("topic_reading"),
					className: Ie.a.button,
					iconClassName: Ie.a.buttonIcon,
					priority: X.c.Secondary,
					onClick: () => r(!0)
				}, Te._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), o && i.a.createElement(Se, {
					className: Ie.a.modal,
					overlayClassName: Ie.a.modalOverlay,
					withOverlay: !0,
					onOverlayClick: () => r(!1),
					onClose: () => r(!1)
				}))
			};
			var Re = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less"),
				Me = o.n(Re);
			const {
				fbt: Ne
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ae = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: Me.a.background
				}, i.a.createElement("img", {
					className: Me.a.snoo,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/faq_v3.png`,
					alt: Ne._("FAQ Snoo", null, {
						hk: "DXQ0O"
					})
				}), i.a.createElement("h2", {
					className: Me.a.subtitle
				}, Ne._("Want to know more?", null, {
					hk: "3vbn1B"
				})), i.a.createElement(X.t, {
					Icon: Object(k.b)("topic_reading"),
					className: Me.a.docsButton,
					iconClassName: Me.a.docsIcon,
					priority: X.c.Secondary,
					kind: X.b.InternalLink,
					to: m("introduction")
				}, i.a.createElement("span", {
					className: Me.a.docTextFull
				}, Ne._("Community Points Documentation", null, {
					hk: "3nnz6o"
				})), i.a.createElement("span", {
					className: Me.a.docTextShort
				}, Ne._("Community Points Doc", null, {
					hk: "1E9Ckc"
				})))))
			};
			var Fe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				Be = o.n(Fe);
			const {
				fbt: Oe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), De = e => {
				let {
					className: t,
					data: o
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(Be.a.container, t),
					style: {
						backgroundColor: o.backgroundColor
					}
				}, i.a.createElement("div", {
					className: Be.a.textSection
				}, i.a.createElement("div", {
					className: Be.a.textContainer
				}, i.a.createElement("h4", {
					className: Be.a.title
				}, o.title), o.body)), i.a.createElement("div", {
					className: Be.a.imageSection
				}, i.a.createElement("img", {
					className: Be.a.image,
					src: o.imageSrc,
					alt: o.title
				})))
			};
			var je = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				We = o.n(je);
			const {
				fbt: Ge
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ye = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement(tt, {
					anchorId: "features"
				}), i.a.createElement("h3", {
					className: We.a.title
				}, Ge._("Features", null, {
					hk: "Bhlfk"
				})), i.a.createElement("h2", {
					className: We.a.subtitle
				}, Ge._("Oh, the possibilities!", null, {
					hk: "1Up4RN"
				})), Le.map(e => i.a.createElement(De, {
					className: We.a.featureContainer,
					key: e.title,
					data: e
				})))
			}, Le = [{
				title: Ge._("Own your reputation", null, {
					hk: "2Z40M2"
				}),
				body: Ge._("{=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.}{=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!}", [Ge._param("=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", null, {
					hk: "22eCEg"
				}))), Ge._param("=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", null, {
					hk: "4a3vgy"
				})))], {
					hk: "3wqGEI"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reputation_v3.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: Ge._("Purchase Special Memberships", null, {
					hk: "4c0PPs"
				}),
				body: Ge._("{=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:}{=Badges}{=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.}{=GIFs (optional)}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Let creators in your community upload custom emojis that you can add to your comments.}", [Ge._param("=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", i.a.createElement("p", {
					className: Object(s.a)(We.a.bodyText, We.a.blackText)
				}, Ge._("Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", null, {
					hk: "3KdhAP"
				}))), Ge._param("=Badges", i.a.createElement("h6", {
					className: We.a.bodyTitle
				}, Ge._("Badges", null, {
					hk: "1Xw4PQ"
				}))), Ge._param("=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", i.a.createElement("p", {
					className: We.a.bodyDetail
				}, Ge._("Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", null, {
					hk: "3mrVe"
				}))), Ge._param("=GIFs (optional)", i.a.createElement("h6", {
					className: We.a.bodyTitle
				}, Ge._("GIFs (optional)", null, {
					hk: "1OkOrY"
				}))), Ge._param("=Embed GIFs directly inside your comments.", i.a.createElement("p", {
					className: We.a.bodyDetail
				}, Ge._("Embed GIFs directly inside your comments.", null, {
					hk: "TmLOL"
				}))), Ge._param("=Animated Emojis", i.a.createElement("h6", {
					className: We.a.bodyTitle
				}, Ge._("Animated Emojis", null, {
					hk: "18gq4g"
				}))), Ge._param("=Let creators in your community upload custom emojis that you can add to your comments.", i.a.createElement("p", {
					className: We.a.bodyDetail
				}, Ge._("Let creators in your community upload custom emojis that you can add to your comments.", null, {
					hk: "Ot9Cs"
				})))], {
					hk: "11CKRv"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/special_memberships_v3.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: Ge._("Buy Coins in your community", null, {
					hk: "3LFg3T"
				}),
				body: i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("Make it rain awards! You can use your Community Points to buy Reddit Coins that only work in the subreddit.", null, {
					hk: "4BNxrU"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/awards_v3.png`,
				backgroundColor: "#00CC7833"
			}, {
				title: Ge._("Put anything to a vote", null, {
					hk: "3PT2yA"
				}),
				body: Ge._("{=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.}{=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.}", [Ge._param("=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", null, {
					hk: "Occ8f"
				}))), Ge._param("=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", null, {
					hk: "20PHmT"
				})))], {
					hk: "KZiXt"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/polls_v3.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: Ge._("Show your appreciation", null, {
					hk: "16HCcH"
				}),
				body: Ge._("{=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.}", [Ge._param("=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", i.a.createElement("p", {
					className: We.a.bodyText
				}, Ge._("Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", null, {
					hk: "3PzATh"
				})))], {
					hk: "3Lb9Rr"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/tipping_v3.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: Ge._("Reward creators and developers", null, {
					hk: "3gxoDp"
				}),
				body: i.a.createElement("p", {
					className: Object(s.a)(We.a.bodyText, We.a.blackText)
				}, Ge._("Creators can be rewarded for making things for the subreddit, such as designing badges or community merchandise. Developers who make community bots or tools for the subreddit can be paid in Points for their work.", null, {
					hk: "2aZ9Y6"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/creator_rewards_v3.png`,
				backgroundColor: "#FFF9F3"
			}];
			var ze = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				He = o.n(ze);
			const {
				fbt: qe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ke = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(t, He.a.container)
				}, i.a.createElement(tt, {
					anchorId: "enroll"
				}), i.a.createElement("div", {
					className: He.a.backgroundContainer
				}, i.a.createElement("h3", {
					className: He.a.title
				}, qe._("Join waitlist", null, {
					hk: "2MmQU3"
				})), i.a.createElement("h2", {
					className: He.a.subtitle
				}, qe._("Want to see Community Points in your subreddit?", null, {
					hk: "3a9HLq"
				})), i.a.createElement("p", {
					className: He.a.body
				}, qe._("Community Points will always be an opt-in feature. We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we'll be in touch!", null, {
					hk: "4uvkEJ"
				})), i.a.createElement(X.t, {
					className: He.a.waitlistButton,
					priority: X.c.Primary,
					kind: X.b.ExternalLink,
					href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
					target: "_blank",
					rel: "noopener noreferrer"
				}, qe._("Join Waitlist", null, {
					hk: "p3fEV"
				})), i.a.createElement("img", {
					className: He.a.moon,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/moon_v2.png`,
					alt: qe._("The moon", null, {
						hk: "GQsMF"
					})
				}), i.a.createElement("img", {
					className: He.a.rocket,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/rocket_v2.png`,
					alt: qe._("Rocket", null, {
						hk: "6iIrb"
					})
				})))
			};
			var Ue = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				Je = o.n(Ue);
			const {
				fbt: Xe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Qe = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(t, Je.a.background)
				}, i.a.createElement(tt, {
					anchorId: "vault"
				}), i.a.createElement("div", {
					className: Je.a.textSection
				}, i.a.createElement("div", {
					className: Je.a.textContainer
				}, i.a.createElement("h3", {
					className: Je.a.title
				}, Xe._("The Vault", null, {
					hk: "3UIB9U"
				})), i.a.createElement("h2", {
					className: Je.a.subtitle
				}, Xe._("Your crypto wallet within Reddit", null, {
					hk: "40R31x"
				})), i.a.createElement("p", {
					className: Je.a.body
				}, Xe._("Community Points live on the blockchain, and your Vault is where you can view, send, and use Community Points within the Reddit app.", null, {
					hk: "1g3lSo"
				})))), i.a.createElement("div", {
					className: Je.a.imageSection
				}, i.a.createElement("img", {
					className: Je.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/vault_v4.png`,
					alt: Xe._("Reddit Vault", null, {
						hk: "8VmO1"
					})
				})))
			};
			var Ze = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				$e = o.n(Ze);
			const {
				fbt: et
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = (e => {
					var t, o;
					return (null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.path) === l.a
				})(Object(r.a)());
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: $e.a.container
				}, i.a.createElement(ee, null), e ? i.a.createElement(Y, null) : i.a.createElement(i.a.Fragment, null, i.a.createElement(ye, {
					className: $e.a.communityPointsSection
				}), i.a.createElement(ue, {
					className: $e.a.benefitsSection
				}), i.a.createElement("img", {
					className: $e.a.spiral,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/spiral_v3.png`,
					alt: et._("Spiraling coins", null, {
						hk: "IuYXo"
					})
				}), i.a.createElement(Ye, {
					className: $e.a.featuresSection
				}), i.a.createElement(Qe, {
					className: $e.a.vaultSection
				}), i.a.createElement(Ae, {
					className: $e.a.faqSection
				}), i.a.createElement(xe, {
					className: $e.a.cryptoFutureSection
				}), i.a.createElement(Ke, {
					className: $e.a.joinWaitlistSection
				}))), !e && i.a.createElement(U, null))
			};
			const tt = e => {
				let {
					anchorId: t
				} = e;
				return i.a.createElement("div", {
					className: $e.a.anchorParent
				}, i.a.createElement("a", {
					id: t,
					className: $e.a.anchor
				}))
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return f
			})), o.d(t, "o", (function() {
				return w
			})), o.d(t, "a", (function() {
				return k
			})), o.d(t, "x", (function() {
				return v
			})), o.d(t, "f", (function() {
				return P
			})), o.d(t, "i", (function() {
				return _
			})), o.d(t, "q", (function() {
				return E
			})), o.d(t, "h", (function() {
				return C
			})), o.d(t, "z", (function() {
				return S
			})), o.d(t, "l", (function() {
				return V
			})), o.d(t, "n", (function() {
				return I
			})), o.d(t, "e", (function() {
				return T
			})), o.d(t, "d", (function() {
				return x
			})), o.d(t, "j", (function() {
				return R
			})), o.d(t, "p", (function() {
				return M
			})), o.d(t, "k", (function() {
				return F
			})), o.d(t, "r", (function() {
				return O
			})), o.d(t, "y", (function() {
				return D
			})), o.d(t, "u", (function() {
				return j
			})), o.d(t, "v", (function() {
				return W
			})), o.d(t, "b", (function() {
				return G
			})), o.d(t, "w", (function() {
				return Y
			})), o.d(t, "s", (function() {
				return L
			})), o.d(t, "t", (function() {
				return z
			})), o.d(t, "g", (function() {
				return H
			})), o.d(t, "m", (function() {
				return q
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/reddit/featureFlags/index.ts"),
				a = o("./src/reddit/helpers/economics/sortBadges.ts"),
				i = o("./src/reddit/helpers/richTextJson/index.ts"),
				r = o("./src/reddit/models/Badge/index.ts"),
				s = o("./src/reddit/models/Badge/managementPage.ts"),
				l = o("./src/reddit/models/Payments/index.ts"),
				u = o("./src/reddit/models/Product/index.ts"),
				c = o("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = o("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				d = o("./src/reddit/selectors/comments.ts"),
				h = o("./src/reddit/selectors/commentSelector.ts"),
				p = o("./src/reddit/selectors/experiments/mediaInComments.ts"),
				y = o("./src/reddit/selectors/gold/powerups/index.ts"),
				b = o("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				f = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === m.a.Fetched) {
						const e = o.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				w = (e, t) => {
					const o = f(e, t);
					return o && o.endsAt || null
				};
			var k;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(k || (k = {}));
			const v = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === m.a.Fetched) {
						const o = w(e, t),
							n = Date.now();
						return o && n < o ? k.Subscribed : k.NotSubscribed
					}
					return k.DontKnow
				},
				P = (e, t) => {
					const o = e.user.account,
						n = e.economics.subredditPremium[t];
					if (o && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[o.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[s.a.Loyalty]: n.find(e => e.placement === r.a.First),
							[s.a.Achievement]: n.find(e => e.placement === r.a.Second),
							[s.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[s.a.Loyalty]: void 0,
						[s.a.Achievement]: void 0,
						[s.a.Cosmetic]: void 0
					}
				};

			function _(e, t) {
				return (null == e ? void 0 : e.length) ? Object(a.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const E = (e, t, o) => {
					var a;
					if (!n.d.spBadges(e)) return g;
					return _(null === (a = e.users.appliedBadges[o]) || void 0 === a ? void 0 : a[t], e.badges.models)
				},
				C = (e, t) => {
					const o = e.economics.subredditPremium[t.subredditId];
					if (o && o.status === m.a.Fetched) {
						const e = o.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function S(e, t) {
				const o = (e.economics.me.data.specialMemberships || {})[t];
				return !!(o && o.settings && o.settings.optOut)
			}

			function V(e, t) {
				const {
					badge: o,
					subredditId: n
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(r.e)(o) && o.userId === a) return o;
				const i = e.badges.models,
					s = e.user.ownedBadges[n] || {},
					l = Object(r.e)(o) ? o.type : o.id;
				return Object.keys(s).map(e => i[e]).find(e => e && e.type === l)
			}

			function I(e, t, o, n) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === m.a.Fetched) {
					if (o === s.a.Loyalty || o === s.a.Achievement) return a.data.collections[o];
					if (o === s.a.Cosmetic && n) return a.data.collections[o][n]
				}
				return g
			}

			function T(e, t) {
				const o = I(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return o ? [].concat(o.locked, o.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function x(e, t) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === m.a.Fetched) {
					const e = o.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(r.f)
				}
				return g
			}

			function R(e, t) {
				return I(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(r.f)(e) || !!e.price))
			}
			const M = e => {
				const t = [],
					o = e.economics.paymentSystems;
				if (o.status === c.a.Fetched && o.data.stripe && o.data.stripe.sources) {
					const e = o.data.stripe.sources;
					for (const o in e) {
						const n = e[o];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: o,
							type: l.a.SavedStripe
						})
					}
				}
				if (o.status === c.a.Fetched && o.data.braintree && o.data.braintree.sources) {
					const e = o.data.braintree.sources;
					for (const o in e) {
						const n = e[o];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const o = A.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (o[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (o[n.currency] = n.price), o
				},
				O = (e, t) => {
					var o, n, a, i;
					const r = (null === (i = null === (a = null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.crypto) || void 0 === n ? void 0 : n.points) || void 0 === a ? void 0 : a[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || A;
					return {
						prices: B(e, t),
						member: r.member || A.member,
						memberPlural: r.memberPlural || A.memberPlural,
						memberAlt: r.memberAlt || A.memberAlt,
						memberAltPlural: r.memberAltPlural || A.memberAltPlural,
						membership: r.membership || A.membership,
						membershipAlt: r.membershipAlt || A.membershipAlt
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === c.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				j = (e, t) => {
					const o = e.user.ownedBadges[t] || {};
					return !!Object.keys(o).length
				},
				W = e => {
					const t = e.economics.paymentSystems;
					return t.status === c.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: o
					} = t;
					if (!o) return;
					return e.economics.emotes[o]
				},
				Y = (e, t) => {
					const o = t && e.economics.gifs[t];
					return !!o && o.hasGifProduct
				},
				L = (e, t, o) => {
					if (Object(y.o)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== o && Object(h.b)(e, {
						commentId: o
					});
					return !(!n || !Object(i.a)(n))
				},
				z = (e, t, o) => {
					if (Object(p.a)(e)) return !!t && Object(d.B)(e, {
						subredditId: t
					});
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(y.p)(e, {
							subredditId: t
						})) return !0;
					const a = "replyToPost" !== o && Object(h.b)(e, {
						commentId: o
					});
					if (a && Object(i.b)(a)) return !0;
					const r = n.d.spGiphy(e),
						s = Y(e, t);
					return !(!r || !s) || r && s
				},
				H = (e, t, o) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[o]
					}
				},
				q = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.6e09cdcdf15926d21284.js.map