// https://www.redditstatic.com/desktop2x/NsfwBlockingModal.fb813217e15f342912e2.js
// Retrieved at 1/24/2023, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NsfwBlockingModal"], {
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/config.ts"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				l = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", l.a), b = i.a.a("UserAgreementLink", l.a), u = i.a.a("PrivacyLink", l.a);
			var p;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(p || (p = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(r.a)(l.a.FooterContainer, {
					[l.a.mIsGrey]: e.textColor === p.Grey,
					[l.a.mIsWhite]: e.textColor === p.White
				})
			}, s.a.createElement(m, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(b, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "YviZP"
			}))), d._param("=Privacy Policy.", s.a.createElement(u, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/lodash/noop.js"),
				i = n.n(r),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				b = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = n.n(b),
				p = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				g = n("./src/reddit/selectors/platform.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = Object(a.a)(e => {
				const t = Object(d.e)(g.b),
					n = Object(d.e)(() => t ? Object(p.f)(t) : null),
					a = Object(d.e)(e => t ? Object(p.ib)(e, {
						pageLayer: t
					}) : null),
					s = Object(d.e)(e => t ? Object(p.ab)(e, {
						pageLayer: t
					}) : null);
				return l.a.createElement(m.a, {
					contentTitle: (() => {
						if (n === o.u.COMMENTS_PAGE || n === o.u.SUBREDDIT) {
							if (a) return Object(_.d)(a)
						} else if ((n === o.u.PROFILE_COMMENTS || n === o.u.PROFILE_OVERVIEW || n === o.u.PROFILE_POSTS) && s) return Object(_.e)(s);
						return null
					})()
				})
			});
			t.default = e => l.a.createElement(v, f({}, e, {
				className: Object(s.a)(e.className, u.a.modal),
				shouldBlurBackground: !0,
				onOverlayClick: i.a,
				overlayClassName: u.a.overlay
			}))
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var a, s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				m = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				k = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/sample/index.ts"),
				x = n("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(a || (a = {}));
			const O = e => {
				Object(v.b)() || Object(x.b)(k.o.Redesign, {
					type: x.a.NsfwBypassableBlocking,
					data: {
						action: e
					}
				})
			};
			var w = n("./src/reddit/selectors/telemetry.ts");
			const E = "nsfw_dialog_bypassable";
			var h;
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(h || (h = {}));
			var y = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: e.fill || h.DEFAULT
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: e.fill || h.DEFAULT
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: e.fill || h.DEFAULT
				})),
				N = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				L = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				B = n("./src/reddit/actions/contentGate.ts"),
				T = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				D = n.n(T);
			const I = {
					d2x_nsfw_signup_blocking_de_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				U = () => o.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				P = () => o.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				A = e => {
					const t = Object(c.d)(),
						n = Object(g.b)(),
						a = Object(c.e)(N.g),
						s = Object(r.useCallback)(() => {
							a === N.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, a]),
						m = (e => e ? i.a.createElement("div", {
							className: D.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: D.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(a === N.a.Blurred);
					return Object(r.useEffect)(() => {
						Object(v.d)(a)
					}, [a]), i.a.createElement("div", {
						className: D.a.mainCta
					}, i.a.createElement(y, null), m, i.a.createElement("div", {
						className: D.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: D.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: D.a.buttonContainer
					}, i.a.createElement(C.j, {
						className: D.a.logIn,
						onClick: () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "click",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(w.d)(e)
								}
							}))()), s(), Object(v.c)(v.a.Login), t(Object(u.openLoginModal)())
						}
					}, U()), i.a.createElement(C.j, {
						className: D.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(w.d)(e)
								}
							}))()), Object(v.c)(v.a.Dismiss), t(Object(l.b)("/"))
						}
					}, P())))
				},
				F = Object(b.a)(e => {
					const t = `${s.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: D.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: D.a.qrCodeInner
					}, i.a.createElement("img", {
						className: D.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: D.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: D.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: D.a.sneakySnoo,
						src: t
					})))
				}),
				S = e => {
					const t = Object(g.b)(),
						{
							contentTitle: n
						} = e,
						a = Object(c.e)(N.i),
						s = Object(c.e)(N.j),
						o = Object(c.e)(N.g),
						r = Object(c.e)(L.c);
					i.a.useEffect(() => {
						r.isNewDesignVariant ? t((() => e => ({
							...Object(w.o)(e),
							source: "xpromo",
							action: "view",
							noun: E,
							actionInfo: {
								...Object(w.d)(e)
							}
						}))()) : t((() => e => ({
							...Object(w.o)(e),
							source: "xpromo",
							action: "view",
							noun: "nsfw_dialog",
							actionInfo: {
								...Object(w.d)(e)
							}
						}))())
					}, [r, t]);
					const l = o === N.a.Blurred ? _.a.White : o === N.a.NoPreview ? _.a.Grey : void 0;
					return i.a.createElement("div", {
						className: D.a.container
					}, r.isNewDesignVariant ? i.a.createElement(M, {
						contentTitle: n
					}) : i.a.createElement(A, {
						contentTitle: n
					}), i.a.createElement("div", {
						className: Object(m.a)(D.a.footerWrapper, {
							[D.a.mIsModal]: o === N.a.Blurred
						})
					}, i.a.createElement(_.b, {
						textColor: l
					})), i.a.createElement(F, {
						qrCodeAsset: (() => a === f.ad.Enabled || s === f.db.BlurredPreview || s === f.db.NoPreview ? I.d2x_nsfw_signup_blocking_de_v1 : I.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				M = e => {
					const t = Object(c.d)(),
						n = Object(g.b)(),
						s = Object(c.e)(N.h);
					return Object(r.useEffect)(() => {
						(e => {
							!Object(v.b)() && e && Object(j.b)(10) && Object(x.b)(k.o.Redesign, {
								type: x.a.NsfwBypassableBlocking,
								data: {
									action: a.View,
									variant: e
								}
							})
						})(s)
					}, [s]), i.a.createElement("div", {
						className: Object(m.a)(D.a.mainCta, {
							[D.a.skippable_buttons]: s === f.eb.SkippableButtons,
							[D.a.skippable_text]: s === f.eb.SkippableText
						})
					}, i.a.createElement("div", {
						className: D.a.contentDescription
					}, i.a.createElement(y, {
						fill: h.BLACK
					}), i.a.createElement("span", {
						className: D.a.cta
					}, e.contentTitle), i.a.createElement("span", {
						className: Object(m.a)(D.a.warning, D.a.warning__bypassable)
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), i.a.createElement("div", {
						className: D.a.cta
					}, (() => o.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), i.a.createElement("div", {
						className: D.a.buttonContainer
					}, i.a.createElement(C.j, {
						className: D.a.logIn,
						onClick: () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "click",
								noun: E,
								actionInfo: {
									...Object(w.d)(e),
									popupButtonText: "login"
								}
							}))()), O(a.Login), t(Object(u.openLoginModal)())
						}
					}, U()), s === f.eb.SkippableButtons && i.a.createElement("div", {
						className: D.a.divider
					}, i.a.createElement("div", {
						className: D.a.dividerLine
					}), i.a.createElement("div", {
						className: D.a.dividerText
					}, (() => o.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), i.a.createElement("div", {
						className: D.a.dividerLine
					})), i.a.createElement(C.j, {
						className: D.a.continue,
						onClick: async () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "click",
								noun: E,
								actionInfo: {
									...Object(w.d)(e),
									popupButtonText: "continue"
								}
							}))()), O(a.Continue), Object(B.q)(), Object(L.d)(), window.location.reload()
						}
					}, (() => o.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(C.j, {
						className: Object(m.a)(D.a.continue, D.a.dismiss, {
							[D.a.no_border]: s === f.eb.SkippableText
						}),
						onClick: () => {
							n((() => e => ({
								...Object(w.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: E,
								actionInfo: {
									...Object(w.d)(e),
									popupButtonText: "back"
								}
							}))()), O(a.Dismiss), t(Object(l.b)("/"))
						}
					}, s === f.eb.SkippableText ? (() => o.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : P())))
				}
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return b
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/localStorage.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				l = n("./src/reddit/selectors/userPrefs.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const m = 30 * a.pb,
				b = () => {
					Object(i.zb)(r.b.XpromoConsolidation, (new Date).toString())
				},
				u = () => {
					if (!Object(s.a)()) return !1;
					const e = localStorage.getItem(r.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(r.b.XpromoConsolidation), !0) : Date.now() > t + m
				},
				p = (e, t) => t === c.a.NoPreview && (e === o.eb.SkippableButtons || e === o.eb.SkippableText),
				_ = (e, t) => t === c.a.NoPreview && e === o.eb.NoUpsell,
				g = Object(d.a)(c.h, c.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === c.a.NoPreview && !p(e, t) && !_(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && p(e, t),
						isOldDesignVariant: !(!e || !t) && _(e, t),
						variant: e
					}
				}),
				f = Object(d.a)(g, l.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NsfwBlockingModal.fb813217e15f342912e2.js.map