// https://www.redditstatic.com/desktop2x/Premium.97aaf654be8b2bbd45eb.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, a) {
			"use strict";

			function n(e, t, a, n) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: a ? "UTC" : void 0
				}).format(s)
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return r
			}));
			var n = a("./src/lib/sentry/index.ts");

			function s() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var s = t.getElementsByTagName("script")[0];
						s.parentNode.insertBefore(n, s)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const r = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, a) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				i = a.n(r),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				o = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends s.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, r = n ? i.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(l.a)(e, i.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: i.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: i.a.buttonContent,
						tabIndex: -1
					}, t, n ? s.a.createElement(o.a, {
						className: i.a.collapseIcon
					}) : s.a.createElement(c.a, {
						className: i.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(l.a)(i.a.collapsibleAnswer, r)
					}, a))
				}
			}
			t.a = m
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				i = a.n(r),
				l = a("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: Object(l.a)(e.className, i.a.marketingPageFooter)
			}, s.a.createElement("div", {
				className: Object(l.a)(e.className, i.a.marketingPageFooterInner)
			}, s.a.createElement("div", {
				className: i.a.linkContainer
			}, s.a.createElement("div", {
				className: i.a.linkCol
			}, s.a.createElement("ul", {
				className: i.a.linkColInner
			}, s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), s.a.createElement("div", {
				className: i.a.linkCol
			}, s.a.createElement("ul", {
				className: i.a.linkColInner
			}, s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), s.a.createElement("div", {
				className: Object(l.a)(i.a.linkCol, i.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: i.a.linkColInner
			}, s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, c._("the reddit app", null, {
				hk: "OcJ1f"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), s.a.createElement("div", {
				className: Object(l.a)(i.a.linkCol, i.a.linkBoldCol)
			}, s.a.createElement("ul", {
				className: i.a.linkColInner
			}, s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), s.a.createElement("li", {
				className: i.a.linkItem
			}, s.a.createElement("a", {
				className: i.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), s.a.createElement("ul", {
				className: i.a.legal
			}, s.a.createElement("li", {
				className: i.a.legalItem
			}, s.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), s.a.createElement("li", {
				className: i.a.legalItem
			}, s.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), s.a.createElement("li", {
				className: i.a.legalItem
			}, s.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), s.a.createElement("li", {
				className: i.a.legalItem
			}, s.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), s.a.createElement("li", {
				className: i.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 558 98",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M355.8812 43.427c0 1.075-.265 2.029-.791 2.863-.527.833-1.34.25-2.437.25-1.181 0-1.083.694-1.705.082-.623-.611-.933-1.287-.933-2.025 0-.463-.964-.886-.89-1.266.074-.379.143-.759.206-1.138-.992 0-2.151.4-3.48 1.202-1.329.802-2.458 1.94-3.386 3.417v18.162c0 .738.143 1.34.428 1.803.284.464.732.812 1.344 1.045.527.21 1.207.369 2.04.474.833.106 1.556.18 2.168.221v2.089h-16.453v-2.089c.485-.041.986-.084 1.503-.126.517-.042.965-.126 1.345-.253.59-.19 1.028-.522 1.312-.995.286-.474.428-1.091.428-1.849V46.048c0-.653-.153-1.297-.459-1.928-.305-.632-.733-1.137-1.281-1.517-.401-.252-.876-.438-1.424-.553-.549-.115-1.139-.195-1.772-.237v-2.089l10.379-.695.442.443v4.397h.158c1.308-1.708 2.764-3.005 4.366-3.891 1.604-.887 3.07-1.329 4.399-1.329 1.329 0 2.409.432 3.243 1.298.833.865 1.25 2.024 1.25 3.48M380.264 51.3684c0-1.178-.101-2.439-.301-3.785-.201-1.346-.522-2.471-.965-3.375-.485-.968-1.15-1.756-1.993-2.366-.845-.611-1.93-.915-3.26-.915-2.214 0-4.054.92-5.52 2.759-1.467 1.84-2.263 4.401-2.39 7.682h14.429zm6.992 11.896c-1.307 2.49-3.058 4.473-5.252 5.95-2.194 1.475-4.715 2.215-7.562 2.215-2.511 0-4.709-.444-6.597-1.331-1.889-.884-3.444-2.087-4.667-3.606-1.224-1.519-2.136-3.29-2.737-5.315-.601-2.026-.902-4.166-.902-6.424 0-2.025.322-4.012.965-5.964.644-1.95 1.587-3.706 2.832-5.269 1.202-1.497 2.695-2.705 4.477-3.622 1.782-.918 3.781-1.376 5.996-1.376 2.278 0 4.229.359 5.853 1.075 1.624.718 2.943 1.699 3.956 2.943.969 1.182 1.693 2.574 2.167 4.177.475 1.603.712 3.343.712 5.22v2.089h-20.662c0 2.051.196 3.911.586 5.581.39 1.67 1.007 3.14 1.851 4.407.823 1.227 1.898 2.195 3.227 2.903 1.329.709 2.911 1.062 4.746 1.062 1.877 0 3.497-.44 4.857-1.32 1.361-.88 2.674-2.465 3.939-4.755l2.215 1.36zM444.2415 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.344-.253.591-.189 1.029-.521 1.314-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.283-1.375-.4-.253-.896-.458-1.486-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM461.5892 68.2805c-.439-.116-.89-.27-1.351-.459-.607-.232-1.052-.59-1.336-1.076-.282-.485-.423-1.096-.423-1.835v-23.439l-.444-.443-11.01.695v2.089c.632.042 1.329.154 2.088.332.759.179 1.339.396 1.741.648.547.379.974.847 1.281 1.406.306.559.459 1.175.459 1.85v17.246c0 .757-.143 1.375-.428 1.848-.284.474-.723.806-1.312.995-.38.127-.828.211-1.345.253-.518.042-1.019.085-1.503.126v2.089h15.061v-2.089c-.545-.041-1.038-.121-1.478-.236M500.3714 70.0364l-10.188.695-.475-.442v-3.955h-.19c-.505.527-1.074 1.092-1.706 1.692-.631.602-1.358 1.145-2.179 1.63-.949.569-1.865 1.001-2.748 1.298-.885.295-2.138.442-3.759.442-2.759 0-4.859-.901-6.303-2.702-1.442-1.802-2.163-4.42-2.163-7.854v-14.919c0-.758-.143-1.395-.43-1.911-.287-.517-.706-.964-1.257-1.344-.383-.253-.861-.437-1.434-.553-.573-.116-1.178-.194-1.814-.237v-2.088l10.409-.76.474.444v21.673c0 2.257.507 3.955 1.519 5.094 1.013 1.139 2.225 1.709 3.639 1.709 1.16 0 2.194-.18 3.101-.537.906-.358 1.666-.779 2.277-1.266.571-.441 1.071-.91 1.503-1.405.433-.495.765-.953.997-1.375v-17.665c0-.695-.147-1.312-.443-1.85-.295-.537-.707-.995-1.233-1.374-.38-.252-.945-.405-1.694-.458-.749-.052-1.587-.099-2.514-.142v-2.088l11.357-.76.476.443v24.747c0 .716.147 1.328.443 1.834.295.505.706.937 1.233 1.295.38.232.833.384 1.362.459.526.074 1.107.121 1.74.142v2.088zM557.5775 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.345-.253.59-.189 1.028-.521 1.313-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.282-1.375-.401-.253-.897-.458-1.487-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM260.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				className: e.redditLogoClassName,
				d: "M275.1322 67.5725v-25.525h3.048c1.623 0 3.041-1.225 3.145-2.845.116-1.775-1.291-3.25-3.041-3.25h-3.152v-4.836c0-1.826-1.378-3.421-3.2-3.538-1.997-.13-3.657 1.452-3.657 3.421v4.953h-2.839c-1.624 0-3.041 1.224-3.146 2.845-.115 1.774 1.29 3.25 3.041 3.25h2.944v25.525c0 1.895 1.535 3.43 3.428 3.43 1.894 0 3.429-1.535 3.429-3.43M155.9915 42.0471c4.146 0 7.672 3.182 8.979 7.62h-17.959c1.307-4.438 4.833-7.62 8.98-7.62zm11.604 13.716c2.968 0 4.696-2.219 4.567-4.403-.068-1.154-.171-1.871-.306-2.457-1.819-7.886-8.232-13.713-15.865-13.713-9.048 0-16.382 8.187-16.382 18.287 0 10.099 7.334 18.287 16.382 18.287 5.667 0 9.715-2.064 12.661-5.299 1.436-1.577 1.171-4.054-.58-5.271-1.422-.988-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.608 0-8.451-3.926-9.334-9.143h20.938zM139.9906 38.7346c0-1.701-1.24-3.109-2.865-3.379-4.993-.753-9.66 1.111-12.374 4.486v-.461c0-2.095-1.715-3.428-3.429-3.428-1.894 0-3.429 1.535-3.429 3.428v28.058c0 1.836 1.385 3.446 3.217 3.557 1.989.119 3.641-1.459 3.641-3.423v-14.474c0-6.405 4.817-11.664 11.426-10.95.239.025.463.024.677 0 1.756-.149 3.136-1.62 3.136-3.414M257.7113 42.429c0-1.895-1.534-3.429-3.429-3.429-1.893 0-3.428 1.534-3.428 3.429v25.144c0 1.894 1.535 3.429 3.428 3.429 1.895 0 3.429-1.535 3.429-3.429V42.429zM191.0413 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.43-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.283-3.502-8.762-3.502-9.048 0-16.383 8.188-16.383 18.287 0 10.1 7.335 18.287 16.383 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.693 2.784 3.365 2.784 1.895 0 3.43-1.535 3.43-3.43v-44.192zM226.8529 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.429-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.284-3.502-8.763-3.502-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.287 16.382 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.694 2.784 3.366 2.784 1.894 0 3.429-1.535 3.429-3.43v-44.192z",
				fill: "#FFF"
			}), s.a.createElement("path", {
				d: "M460.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096M358.0775 43.3284c0 2.584-2.095 4.679-4.68 4.679-2.584 0-4.679-2.095-4.679-4.679 0-2.585 1.095-4.68 3.679-4.68 3.404 0 5.68 2.095 5.68 4.68M319.3236 65.5432c.844-1.308 1.466-2.826 1.867-4.556.401-1.729.601-3.66.601-5.791 0-1.56-.169-3.152-.506-4.777-.338-1.624-.865-3.037-1.582-4.24-.718-1.223-1.656-2.215-2.817-2.974-1.16-.76-2.552-1.14-4.176-1.14-1.561 0-2.89.344-3.987 1.029-1.096.686-2.046 1.503-2.847 2.452v18.447c.189.57.501 1.16.933 1.772.432.612.912 1.138 1.44 1.582.653.527 1.36.955 2.12 1.281.759.327 1.687.49 2.784.49 1.181 0 2.32-.31 3.417-.932 1.097-.622 2.015-1.503 2.753-2.643m5.157-22.433c1.244 1.477 2.21 3.191 2.896 5.142.684 1.951 1.028 4.182 1.028 6.691 0 2.468-.411 4.72-1.234 6.756-.823 2.035-1.91 3.771-3.259 5.204-1.413 1.456-2.985 2.575-4.715 3.355-1.729.78-3.564 1.171-5.505 1.171-1.878 0-3.417-.212-4.62-.633-1.202-.422-2.183-.918-2.942-1.487h-.253v12.387c0 2.504 1.06 3.37 1.787 3.599.911.288.458.153 1.51.27v2.089h-14.435v-2.089c.653-.042 1.286-.094 1.898-.158.612-.062 1.161-.169 1.646-.316.633-.211 1.076-.58 1.329-1.108.253-.527.38-1.149.38-1.866v-36.191c0-.633-.158-1.244-.475-1.835-.316-.59-.728-1.065-1.234-1.424-.38-.253-.907-.448-1.582-.585-.676-.138-1.329-.226-1.962-.269v-2.088l10.632-.697.442.38v3.512l.253.063c1.097-1.265 2.457-2.32 4.082-3.164 1.624-.843 3.238-1.265 4.841-1.265 1.94 0 3.718.411 5.332 1.234 1.613.822 3 1.93 4.16 3.322M94.9525 13.8157l-12.222-12.219a5.4455 5.4455 0 0 0-3.853-1.596h-61.204c-1.449 0-2.832.574-3.854 1.596l-12.222 12.219c-1.975 1.973-2.14 5.118-.377 7.287.047.062 5.045 6.539 5.045 17.667 0 7.109-.788 12.208-1.485 16.706-.58 3.727-1.123 7.248-1.123 11.179 0 10.568 8.171 22.452 23.783 24.717 11.37 1.653 17.741 5.784 17.779 5.804.916.62 1.98.927 3.045.927a5.55 5.55 0 0 0 3.04-.907c.063-.04 6.435-4.171 17.804-5.824 15.613-2.265 23.783-14.149 23.783-24.717 0-3.931-.543-7.452-1.123-11.179-.697-4.498-1.485-9.597-1.485-16.706 0-11.08 4.871-17.437 5.047-17.667 1.762-2.169 1.597-5.314-.378-7.287",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M59.4115 56.5569c-2.757 0-5-2.243-5-5 0-2.758 2.243-5.001 5-5.001s5 2.243 5 5.001c0 2.757-2.243 5-5 5m.88 8.212c-3.412 3.407-9.951 3.672-11.874 3.672-1.924 0-8.464-.265-11.872-3.673-.506-.506-.506-1.326.001-1.833.505-.505 1.326-.506 1.832.001 2.15 2.15 6.752 2.914 10.039 2.914 3.286 0 7.889-.764 10.043-2.915.507-.506 1.327-.505 1.832.001.506.507.506 1.327-.001 1.833m-27.88-13.212c0-2.758 2.244-5.001 5.002-5.001 2.756 0 4.998 2.243 4.998 5.001 0 2.756-2.242 4.999-4.998 4.999-2.758 0-5.002-2.243-5.002-4.999m47.992-5.001c0-3.866-3.135-7-7-7-1.887 0-3.596.75-4.855 1.964-4.784-3.452-11.377-5.683-18.72-5.939l3.188-15.003 10.418 2.215c.127 2.649 2.296 4.763 4.977 4.763 2.761 0 5-2.238 5-5s-2.239-5-5-5c-1.965 0-3.646 1.143-4.465 2.791l-11.633-2.474c-.323-.07-.662-.006-.94.175-.278.181-.473.464-.542.788l-3.561 16.741c-7.451.207-14.149 2.439-18.995 5.93-1.258-1.206-2.961-1.951-4.841-1.951-3.866 0-7 3.134-7 7 0 2.845 1.7 5.287 4.136 6.383-.108.695-.167 1.401-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.711-.058-1.412-.165-2.103 2.452-1.089 4.165-3.542 4.165-6.397",
				fill: "#FFF"
			}))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "b", (function() {
				return l
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const a = [];
					for (const n in s) {
						const r = s[n];
						(r.priceInCoins <= e || t) && a.push(r)
					}
					return a
				},
				i = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				l = [{
					prompt: () => n.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => n.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => n.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => n.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => n.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => n.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => n.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => n.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => n.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => n.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}]
		},
		"./src/reddit/pages/Premium/PurchaseSection/index.m.less": function(e, t, a) {
			e.exports = {
				purchaseSection: "_1Z4JIk1tig4105EbrIycaL",
				purchaseSectionTitle: "rHMISrZp9SHJ1IzdhABiz",
				premiumPackage: "_3WGcoFTTz-GM82WnzxSX73",
				leftPanel: "_1puFgDp5FbTAQr9a_0LrGn",
				rightPanel: "_3D-ZD1M6iujRD9Do10wzzG",
				loaderContainer: "_1OLGghaUKpu5I5d4lJ9ppG",
				bonusBanner: "_-9XGfHOadAUgtRNjkSZKV",
				premiumPerks: "bEsD0n_csIvPULyVDGGVd",
				premiumPerk: "_2z53Gpin--BjLiC-gOY2Fz",
				checkmark: "DOF92Z56Jpuzu-uk0dtm8",
				premiumButton: "I9OOXc26jbu8k3mMZKfrf",
				renewalSubtext: "_2l8oKUCqUjuCRML67dacb9",
				miscContainer: "_3g7Ai2PiGJ7m-aSeJuycky",
				redeemCodeLink: "_2URY1OYTvU27C9oKXBC82Q",
				giftCodeInputContainer: "_3L5SydnLk5qeoEJJzTH6Tk",
				giftCodeHidden: "J3g_g5iCRg7x-G-aAd9O4",
				giftCodeInput: "_2Crw4emyCY4MGfKI5iTy7W",
				redeemButton: "_2nS3QvMYiCrNl4K1Tj6YYP"
			}
		},
		"./src/reddit/pages/Premium/index.m.less": function(e, t, a) {
			e.exports = {
				hero: "_3KzmnADgrpURkhkiSnEL8O",
				heroInner: "_2oUlTJc4IuiAjkfQeGQ6j7",
				heroTitle: "GZKGDIHeqtU51PlPpyUL_",
				heroLogo: "_2QdbMXAwLpWVLJfDJ275mD",
				heroDescription: "hUEA0jAwHPAvz7Q_ME6CQ",
				heroCTA: "gXFj405BWNVJwvFfEte3S",
				heroCta: "gXFj405BWNVJwvFfEte3S",
				heroPremiumExpiration: "_3mePsES_o4kEB7LYhNam7d",
				faqsSection: "La5Bp4i68ssM0jTc6B5JA",
				faqsTitle: "_2GcqV-6cZ_hX6CL-beaiLm",
				faqs: "_3-oSsu5eqn4UFdWjr2yxgw"
			}
		},
		"./src/reddit/pages/Premium/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./src/config.ts"),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/react-router-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/constants/index.ts"),
				d = a("./src/lib/humanizeDate/index.ts"),
				u = a("./src/lib/loadRedditAdsPixel.ts"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				b = a("./src/reddit/selectors/telemetry.ts");
			const f = "premium_marketing",
				k = () => e => Object.assign({
					source: f,
					action: "click",
					noun: "get_premium",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, b.defaults(e)),
				v = () => e => Object.assign({
					source: f,
					action: "click",
					noun: "price",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, b.defaults(e)),
				C = () => e => Object.assign({
					source: f,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, b.defaults(e)),
				P = () => e => Object.assign({
					source: f,
					action: "click",
					noun: "manage",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, b.defaults(e));
			var E = a("./src/reddit/helpers/trackers/screenview.ts"),
				_ = a("./src/telemetry/index.ts"),
				w = a("./src/telemetry/models/Timer.ts"),
				N = a("./src/reddit/pages/Premium/index.m.less"),
				x = a.n(N),
				M = a("./src/reddit/actions/claimgold.ts"),
				I = a("./src/reddit/actions/login.ts"),
				y = a("./src/reddit/selectors/claimgold.ts"),
				j = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				O = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				G = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				S = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				L = a("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				F = a("./src/reddit/controls/Button/index.tsx"),
				A = a("./src/reddit/models/Gold/Premium/index.ts"),
				R = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				T = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				B = a("./src/reddit/selectors/user.ts"),
				z = a("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				D = a("./src/lib/classNames/index.ts"),
				U = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				q = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				H = a("./src/reddit/pages/Premium/PurchaseSection/index.m.less"),
				J = a.n(H);
			class Q extends i.a.Component {
				constructor() {
					super(...arguments), this.onClaimGoldClick = () => {
						const {
							sendEvent: e,
							toggleClaimGoldModal: t
						} = this.props;
						e(C()), t()
					}, this.onGiftCodeRedeem = e => {
						e.preventDefault(), this.props.onGiftCodeRedeem()
					}
				}
				render() {
					const {
						className: e,
						giftCode: t,
						isPremiumSubscriber: a,
						onClickBuyPremium: r,
						onClickManagePremium: l,
						onGiftCodeInput: c,
						premiumPackage: o,
						shouldShowClaimGoldModal: m
					} = this.props, d = "".concat(n.a.assetPath, "/img/gold/crest-with-background.jpg");
					return i.a.createElement("div", {
						className: Object(D.a)(e, J.a.purchaseSection)
					}, i.a.createElement("h2", {
						className: J.a.purchaseSectionTitle
					}, s.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), i.a.createElement("div", {
						className: J.a.premiumPackage
					}, o ? i.a.createElement(V, {
						isPremiumSubscriber: a,
						onClickBuyPremium: r,
						onClickManagePremium: l,
						premiumPackage: o
					}) : i.a.createElement(W, null), i.a.createElement("div", {
						className: J.a.rightPanel,
						style: {
							backgroundImage: 'url("'.concat(d, '")')
						}
					})), i.a.createElement("div", {
						className: J.a.miscContainer
					}, i.a.createElement("div", {
						className: Object(D.a)(J.a.miscItem, J.a.renewalSubtext)
					}, s.fbt._("Subscription automatically renews monthly", null, {
						hk: "21TCR6"
					})), i.a.createElement(F.o, {
						className: J.a.redeemCodeLink,
						onClick: this.onClaimGoldClick
					}, s.fbt._("Redeem a gift code", null, {
						hk: "2NJLkV"
					})), i.a.createElement("form", {
						className: Object(D.a)(J.a.giftCodeInputContainer, {
							[J.a.giftCodeHidden]: !m
						}),
						onSubmit: this.onGiftCodeRedeem
					}, i.a.createElement("input", {
						className: J.a.giftCodeInput,
						type: "text",
						maxLength: 30,
						placeholder: s.fbt._("Gift Code", null, {
							hk: "1UDPjt"
						}),
						onChange: c,
						value: t
					}), i.a.createElement(F.i, {
						className: J.a.redeemButton
					}, s.fbt._("Redeem", null, {
						hk: "1d2cH2"
					})))))
				}
			}
			const W = () => i.a.createElement("div", {
					className: Object(D.a)(J.a.leftPanel, J.a.loaderContainer)
				}, i.a.createElement(U.a, {
					sizePx: 80
				})),
				V = e => {
					const {
						isPremiumSubscriber: t,
						onClickBuyPremium: a,
						onClickManagePremium: n,
						premiumPackage: r
					} = e, {
						pennies: l,
						periodicalCoins: c,
						signupBonusCoins: o
					} = r, m = !!o && o > 0 && o.toLocaleString(), d = c.toLocaleString(), u = "$".concat((l / 100).toLocaleString());
					return i.a.createElement("div", {
						className: J.a.leftPanel
					}, m && i.a.createElement("div", {
						className: J.a.bonusBanner
					}, s.fbt._("{bonus-coins} Coins Sign Up Gift", [s.fbt._param("bonus-coins", m)], {
						hk: "1D95uH"
					})), i.a.createElement("ul", {
						className: J.a.premiumPerks
					}, i.a.createElement("li", {
						className: J.a.premiumPerk
					}, i.a.createElement(q.a, {
						className: J.a.checkmark
					}), s.fbt._("Ads-free experience", null, {
						hk: "1dmvDS"
					})), i.a.createElement("li", {
						className: J.a.premiumPerk
					}, i.a.createElement(q.a, {
						className: J.a.checkmark
					}), s.fbt._("{monthly-coins} Coins every month", [s.fbt._param("monthly-coins", d)], {
						hk: "CngQz"
					}))), i.a.createElement(F.h, {
						className: J.a.premiumButton,
						onClick: t ? n : a
					}, t ? s.fbt._("Manage", null, {
						hk: "2SIec3"
					}) : s.fbt._("{monthly-price}/Month", [s.fbt._param("monthly-price", u)], {
						hk: "2xmHVK"
					})))
				},
				Y = Object(o.c)({
					giftCode: y.a,
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: B.p,
					isPremiumSubscriber: B.q,
					isLoggedIn: B.H,
					premiumPackages: R.e,
					purchaseCatalogPending: R.g,
					shouldShowPremiumPurchaseModal: T.m,
					shouldShowClaimGoldModal: y.b
				}),
				K = Object(l.b)(Y, (e, t) => ({
					onGiftCodeInput: t => {
						t.stopPropagation(), e(Object(M.j)(t.target.value))
					},
					onGiftCodeRedeem: () => e(Object(M.h)()),
					onManagePremium: () => e(Object(c.b)("/settings/gold")),
					onOpenLoginModal: () => e(Object(I.h)()),
					onPurchasePremium: t => e(Object(j.d)({
						correlationId: t
					})),
					requestPurchaseCatalog: t => e(Object(O.b)(t)),
					toggleClaimGoldModal: () => e(Object(M.i)())
				}));
			class X extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(p.d)(p.a.GoldPayment, !1), this.onClickGetPremium = () => {
						this.onPurchase(k)
					}, this.onClickPrice = () => {
						this.onPurchase(v)
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: a,
						sendEvent: n
					} = this.props;
					e.length || t || a(this.correlationId);
					const s = m.Bb.PREMIUM;
					_.c.has(s) && n(Object(E.j)(w.TimerType.InApp, _.c.end(s))), Object(u.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, this.renderHero(), this.renderPurchase(), this.renderFAQSection(), this.renderModal(), i.a.createElement(S.a, null))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: a
					} = this.props;
					return i.a.createElement("div", {
						className: x.a.hero,
						style: {
							backgroundImage: 'url("'.concat(n.a.assetPath, '/img/gold/premium-hero-g.jpg")')
						}
					}, i.a.createElement("div", {
						className: x.a.heroInner
					}, i.a.createElement("h1", {
						className: x.a.heroTitle
					}, i.a.createElement(z.a, {
						className: x.a.heroLogo
					})), i.a.createElement("p", {
						className: x.a.heroDescription
					}, s.fbt._("Reddit Premium gives you an ad-free experience, special benefits, and directly supports Reddit. The more Reddit is user-supported, the freer we are to make Reddit the best it can be.", null, {
						hk: "3BejFp"
					})), i.a.createElement(F.h, {
						className: x.a.heroCTA,
						onClick: this.onClickGetPremium
					}, a ? s.fbt._("Manage Premium", null, {
						hk: "13LAq1"
					}) : s.fbt._("Get Reddit Premium", null, {
						hk: "2stvFN"
					})), !a && t && i.a.createElement("div", {
						className: x.a.heroPremiumExpiration
					}, Object(g.a)(s.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [s.fbt._param("Premium expiration date", Object(d.a)(e, !0))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": i.a.createElement("a", {
							href: "/settings/premium",
							target: "_blank"
						}, s.fbt._("here", null, {
							hk: "d7Mhm"
						}))
					}))))
				}
				onPurchase(e) {
					const {
						isPremiumSubscriber: t,
						isLoggedIn: a,
						onManagePremium: n,
						onOpenLoginModal: s,
						onPurchasePremium: r,
						sendEvent: i
					} = this.props;
					t ? (i(P()), n()) : (a && i(e()), a ? r(this.correlationId) : s())
				}
				renderPurchase() {
					const {
						giftCode: e,
						isPremiumSubscriber: t,
						onGiftCodeInput: a,
						onGiftCodeRedeem: n,
						premiumPackages: s,
						sendEvent: r,
						shouldShowClaimGoldModal: l,
						toggleClaimGoldModal: c
					} = this.props, o = s.length ? s[0] : void 0;
					return i.a.createElement(Q, {
						giftCode: e,
						isPremiumSubscriber: t,
						onClickBuyPremium: this.onClickPrice,
						onClickManagePremium: this.onClickPrice,
						onGiftCodeInput: a,
						onGiftCodeRedeem: n,
						premiumPackage: o,
						sendEvent: r,
						shouldShowClaimGoldModal: l,
						toggleClaimGoldModal: c
					})
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: x.a.faqsSection
					}, i.a.createElement("h2", {
						className: x.a.faqsTitle
					}, s.fbt._("Reddit Premium FAQ", null, {
						hk: "r4Da2"
					})), i.a.createElement("div", {
						className: x.a.faqs
					}, A.b.map((e, t) => i.a.createElement(G.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				renderModal() {
					return this.props.shouldShowPremiumPurchaseModal && i.a.createElement(L.a, null)
				}
				componentWillUnmount() {
					Object(p.b)(p.a.GoldPayment)
				}
			}
			t.default = K(Object(h.c)(X))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.97aaf654be8b2bbd45eb.js.map