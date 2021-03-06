// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.8c92aa589e8158aa761d.js
// Retrieved at 11/12/2020, 8:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"], {
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ub
				});
				return Object(u.ed)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Vb
				});
				return Object(u.ed)(t) ? void 0 : t
			}, (e, t) => e === u.Wb.Enabled && t === u.Wb.Enabled);
			var p = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				f = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var y;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(y || (y = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(f).join("")
			})(y.SHA1, e);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			const w = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				I = Object({
					SENTRY_RELEASE_VERSION: "519bb90-production"
				}),
				j = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(I.SENTRY_RELEASE_VERSION, " ").concat(p.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: l,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: f,
					playerName: y,
					playerVersion: I,
					respectDoNotTrack: C,
					saltLength: S,
					saltTimeToLive: T,
					viewerUserIdLength: L
				} = Object.assign(Object.assign({}, j), t);
				class M extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = O(t, ["forwardedRef"]);
						return n.a.createElement(e, v({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await c();
							if (this.isMonitoring) {
								const t = this.getVideoData();
								e.emit(this.video, "videochange", t)
							} else {
								const t = await this.getMuxData();
								e.monitor(this.video, t), this.isMonitoring = !0
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || M.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = x(),
							i = "".concat(s).concat(e).concat(t);
						return (await E(i)).substr(0, M.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return Object.assign(Object.assign({
							debug: M.DEBUG,
							disableCookies: M.DISABLE_COOKIES,
							respectDoNotTrack: M.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: M.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: M.PLAYER_NAME,
								player_version: M.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = M.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = g(M.SALT_LENGTH), Object(r.b)(e, t, M.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? M.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? M.STREAM_TYPE_LIVE : M.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				M.displayName = w(e), M.ANONYMOUS_USER_ID = s, M.DEBUG = l, M.DISABLE_COOKIES = u, M.DURATION_LIVE = 1 / 0, M.ENV_KEY = m, M.LOCAL_STORAGE_SALT_KEY = p, M.LOCAL_STORAGE_VIEWER_USER_ID_KEY = f, M.PLAYER_NAME = y, M.PLAYER_VERSION = I, M.RESPECT_DO_NOT_TRACK = C, M.SALT_LENGTH = S, M.SALT_TIME_TO_LIVE = T, M.STREAM_TYPE_LIVE = "live", M.STREAM_TYPE_ON_DEMAND = "on-demand", M.VIEWER_USER_ID_LENGTH = L;
				const N = Object(i.forwardRef)((e, t) => n.a.createElement(M, v({}, e, {
						forwardedRef: t
					}))),
					_ = Object(a.c)({
						redditUserId: b.g,
						isMuxEnabled: h
					});
				return Object(o.b)(_, null, null, {
					forwardRef: !0
				})(N)
			}
		},
		"./src/reddit/components/Econ/Prediction/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement~reddit-components-Econ-Prediction"), s.e("EconHelperActions~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, s) {
			e.exports = {
				outerContainer: "kcerW9lbT-se3SXd-wp2i",
				nextButton: "_38uXo2TofvhEuLKeH-rRcV",
				icon: "_32kofHIEwuARK_15MrzAuT",
				seeMore: "_3b8u2OJXaSDdBWoRB7zUoK",
				iconImage: "_3PkAZ5W4aDQ7cujQ426UiB",
				prevIcon: "CxV9u12DiN4nfOLEzaWGg",
				nextIcon: "Qfn6RihWXp6riuP88alpI",
				imageLink: "iUP9nbvcaxfwKrQTgt0sw",
				tallImage: "_1ti9kvv_PMZEF2phzAjsGW",
				commonImage: "_3BxRNDoASi9FbGX01ewiLg",
				navigationUnderlay: "_1fSFPkxZ9pToLETLQT2dmc",
				hasMoreSlides: "_3-JCOd-nY76g29C7ZVX_kl",
				slideshowContainer: "KVyBaj7FjzElWsqJDmw7v",
				slideImageMainDiv: "_35oEP5zLnhKEbj5BlkTBUA",
				slideImage: "_1dwExqTGJH2jnA-MYGkEL-",
				slide: "_28TEYBuEdOuE3kN6UyoKMa",
				imagesWrapper: "_2Ev7WJU0f45KxlmClce9t8",
				slideWrapper: "_1apobczT0TzIKMWpza0OhL",
				figure: "_3o5Vzct5tn9PE7e-emdDmf",
				imageMetaData: "_26daP6nhhW7BT-CMzL0ijs",
				imageUrl: "_1JvpVe-IA894KlEuAn5i9c",
				outboundUrlWrapper: "_2ZUcZqGYDSM0BMbiracglV",
				linkIcon: "_2pA6COv2OLOcG3Ma_ZAzLs",
				urlText: "G960looU9eqiZ1POYed8r",
				emptyCaptionBlock: "cKdLDCF6ney9RBLRzJt8j",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P",
				unblurButtonContainer: "XU8P4L1nSifowaG9_gEQu",
				unblurButton: "_2xd9ygloNjk8lC1O8LrxPo",
				tilesWrapper: "bVildkms0x9XcY2qrG0Mr",
				tileImage: "_1ynfiEQPXyJqwL8az8sG71",
				blurredContent: "kYRcqD1CH-tXu0xGsAOLH",
				tilePlaceholder: "Qazqk11mIzZph1VMsNMtk",
				tileIcon: "_3VAoQueUjpnNBtHAZRjo_0"
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/truncateText/index.ts"),
				l = s("./src/reddit/helpers/trackers/gallery.ts");
			var c = (e, t, s) => {
					const n = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", n), () => {
							t && t.removeEventListener("keydown", n)
						}
					}, [t, n])
				},
				u = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				p = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				b = s("./src/reddit/actions/media.ts"),
				g = s("./src/reddit/constants/keycodes.ts"),
				x = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/selectors/media.ts"),
				E = s("./src/reddit/components/Media/blurredContent.ts"),
				v = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				O = s.n(v);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: o,
					imgAltText: r
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(a.a)({
						[O.a.slideImageMainDiv]: !i
					})
				}, n.a.createElement("img", {
					src: o ? d : void 0,
					alt: r,
					className: O.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: O.a.seeMore
				}, w._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, j = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: o,
					originalImage: r,
					isListing: d,
					isSponsored: l,
					isReadyToShow: c,
					imgAltText: u
				} = e, m = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, h = Object(x.c)(d), p = r.y > h && Object(f.J)(r.y, r.x), b = p ? {} : {
					maxHeight: "100%"
				};
				let g;
				return g = i || (p ? r : o), n.a.createElement("li", {
					style: m,
					className: O.a.slide
				}, n.a.createElement("figure", {
					className: Object(a.a)({
						[O.a.tallImage]: p,
						[O.a.commonImage]: !p
					}, O.a.figure)
				}, d || l ? n.a.createElement(I, {
					displayImage: g,
					style: b,
					showSeeMore: p,
					isReadyToShow: c,
					imgAltText: u
				}) : n.a.createElement("a", {
					href: "u" in r ? r.u : r.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(a.a)({
						[O.a.tallImage]: p,
						[O.a.commonImage]: !p
					}, O.a.imageLink)
				}, n.a.createElement(I, {
					displayImage: g,
					style: b,
					showSeeMore: p,
					isReadyToShow: c,
					imgAltText: u
				}))))
			}, C = e => n.a.createElement("a", {
				className: Object(a.a)(e.className, O.a.navigationUnderlay, {
					[O.a.hasMoreSlides]: e.hasMoreSlides
				}),
				onClick: t => {
					e.onClick(), t.stopPropagation()
				},
				onMouseDown: t => {
					e.setFocusTo.current && e.setFocusTo.current.focus({
						preventScroll: !0
					}), t.preventDefault()
				},
				title: e.hasMoreSlides ? e.title : void 0
			}, e.hasMoreSlides && n.a.createElement("i", {
				className: Object(a.a)(e.iconClassName, O.a.icon)
			}, n.a.createElement(m.a, {
				className: O.a.iconImage
			}))), S = e => n.a.createElement("div", {
				className: O.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: O.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: O.a.imageUrl
			}, n.a.createElement("a", {
				className: O.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: O.a.urlText
			}, Object(x.e)(e.outboundUrl)), n.a.createElement(h.a, {
				className: O.a.linkIcon
			})))), T = e => n.a.createElement("div", {
				className: O.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(p.a, {
				className: O.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), L = e => {
				let t = e - 4;
				return t < 0 && (t = 0), t
			}, M = (e, t) => {
				let s = e + 4;
				return s > t - 1 && (s = t - 1), s
			};
			t.a = e => {
				const t = Object(o.c)(),
					{
						captionHeight: s,
						galleryItems: m,
						imageHeight: h,
						isListing: p,
						isSponsored: v,
						isTileLayout: w,
						mediaMetadata: I = {},
						postId: N,
						postTitle: _,
						shouldShowTileLayoutOption: P,
						subredditName: R
					} = e,
					D = Object(o.d)(e => Object(y.a)(e, N)),
					A = D > 0,
					V = D < m.length - 1,
					k = Object(u.a)(),
					[B, W] = Object(i.useState)(L(D)),
					[F, H] = Object(i.useState)(M(D, m.length)),
					U = Object(i.useCallback)(e => {
						t(Object(b.f)({
							postId: N,
							index: e
						}))
					}, [t, N]),
					G = Object(i.useCallback)(() => {
						t(Object(b.i)({
							postId: N,
							isTileLayout: !w
						}))
					}, [t, N, w]),
					Y = Object(i.useCallback)(() => {
						if (!V) return;
						const e = D + 1;
						if (e + 1 >= F) {
							const e = M(F, m.length);
							e !== F && H(e)
						}
						U(e), k(l.b(N, e)), k(l.d(N, e + 1))
					}, [V, D, U, k, N, F, m.length]),
					K = Object(i.useCallback)(() => {
						if (!A) return;
						const e = D - 1;
						if (e - 1 <= B) {
							const e = L(B);
							e !== B && W(e)
						}
						const t = D + 1;
						U(e), k(l.a(N, t)), k(l.d(N, t - 1))
					}, [A, D, U, k, N, B]),
					z = Object(i.useCallback)(() => {
						const e = m[D] && m[D].outboundUrl,
							t = D + 1;
						e && k(l.c(N, e, t))
					}, [k, N, D, m]),
					J = Object(i.useRef)(null),
					q = Object(i.useRef)(null);
				c(g.a.ArrowLeft, J.current, K), c(g.a.ArrowRight, J.current, Y);
				const Q = m[D] && m[D].caption,
					X = m[D] && m[D].outboundUrl,
					Z = ((e, t, s) => {
						const i = Object(x.f)(e),
							n = Object(x.g)(i),
							o = n.x / n.y < 1,
							a = Object(x.h)(e),
							r = Object(x.i)(e || {}, Object(x.c)(s), f.p);
						if (s || r || a || o) return {
							height: t
						};
						const d = Object(f.C)(n.y, n.x);
						return {
							paddingBottom: "".concat(d, "%")
						}
					})(I, h, p);
				return n.a.createElement("div", {
					className: Object(a.a)(O.a.outerContainer),
					ref: J,
					tabIndex: 0
				}, w ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(a.a)(O.a.tilesWrapper, {
						[O.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, m.map((t, s) => {
					const i = t.mediaId,
						o = I && I[i];
					if (!o || !o.s) return null;
					const a = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						r = Object(x.d)(f.z, a);
					if (!r) return null;
					const d = o.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: "url(".concat("gif" in d ? d.gif : "u" in r && r.u, ")")
						},
						className: O.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), G(), U(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: O.a.tilePlaceholder
				}))), e.shouldBlur && n.a.createElement("div", {
					className: O.a.unblurButtonContainer
				}, n.a.createElement("button", {
					className: O.a.unblurButton
				}, Object(E.a)(!!e.isNSFW, !!e.isSpoiler)))) : n.a.createElement("div", {
					className: O.a.slideshowContainer,
					tabIndex: -1,
					ref: q,
					onClick: e.onClickRevealBlurred,
					style: Z
				}, n.a.createElement("div", {
					className: O.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: O.a.slideWrapper
				}, m.map((t, s) => {
					const i = t.mediaId,
						o = I && I[i];
					if (!o || !o.s) return null;
					const a = t.caption ? t.caption : _,
						l = Object(d.a)(R ? "".concat(R, " - ").concat(a) : a, 300, r.cb),
						c = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						u = Object(x.d)(h, c);
					if (!u) return null;
					const m = e.shouldBlur && Object(x.d)(h, o.o || []) || void 0,
						p = s >= B && s <= F;
					return n.a.createElement(j, {
						slideIndex: s,
						currentIndex: D,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: o.s,
						isListing: e.isListing,
						isSponsored: v,
						key: i,
						isReadyToShow: p,
						imgAltText: l
					})
				})), e.shouldBlur && !e.isListing && n.a.createElement("div", {
					className: O.a.unblurButtonContainer
				}, n.a.createElement("button", {
					className: O.a.unblurButton
				}, Object(E.a)(!!e.isNSFW, !!e.isSpoiler))), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(C, {
					onClick: K,
					setFocusTo: q,
					hasMoreSlides: A,
					title: "Previous",
					iconClassName: O.a.prevIcon,
					className: O.a.prevButton
				}), n.a.createElement(C, {
					onClick: Y,
					setFocusTo: q,
					hasMoreSlides: V,
					title: "Next",
					iconClassName: O.a.nextIcon,
					className: O.a.nextButton
				}))), m.length > 1 ? n.a.createElement(T, {
					currentSlide: D + 1,
					totalSlides: m.length,
					toggleTileLayout: P && G || void 0
				}) : ""), !Q && !X || w || v ? !!s && !w && !v && n.a.createElement("div", {
					className: O.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(S, {
					caption: Q,
					onClickEvent: z,
					outboundUrl: X,
					captionHeight: s
				}))
			}
		},
		"./src/reddit/components/Media/PollContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/Poll/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Governance/Proposal/async.ts");
			const u = Object(a.c)({
				poll: d.e
			});
			t.a = Object(o.b)(u)(e => {
				let {
					isCommentsPage: t,
					poll: s,
					postId: i
				} = e;
				return s ? Object(r.e)(s) ? n.a.createElement(l.a, {
					postId: i
				}) : n.a.createElement(c.a, {
					postId: i,
					isCommentsPage: t
				}) : null
			})
		},
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(u);
			class h extends n.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(c.a)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: m.a.placeholder
					}, [1, 2, 3].map(t => n.a.createElement("div", {
						key: t,
						className: m.a.placeholderParagraph
					}, n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}))))
				}
			}
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.s)(t))
			}))(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			t.a = e => {
				var {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: u,
					isTitleOnly: h,
					postId: x,
					showFull: f
				} = e, y = g(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const E = {
						[m.a.richTextContainerFull]: f,
						[m.a.richTextContainerTitleOnly]: h && !f,
						[m.a.richTextContainer]: !f && !h
					},
					v = {};
				f || (v.maxHeight = "".concat(h ? r.m : l ? r.l : r.k, "px")), d && (v.maxWidth = "".concat(a.d, "px"));
				const O = c && f;
				return n.a.createElement("div", b({
					className: Object(o.a)(E, i),
					style: v
				}, y), s, O && n.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: u,
					postId: x
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				l = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				p = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const g = 350,
				x = 100,
				f = 300;
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && r.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", d.a)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentDidUpdate(e) {
					!this.props.canLoadContent && e.canLoadContent && this.setState(e => {
						let {
							isFullyLoaded: t
						} = e;
						return t ? {
							isFullyLoaded: !1
						} : null
					})
				}
				componentWillUnmount() {
					this.iframe && r.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: s,
						onIframeLoaded: n,
						source: r,
						title: d
					} = this.props, {
						isFullyLoaded: h
					} = this.state, y = s.height || (t.isDeleted ? x : f);
					return o.a.createElement(c.a, b({}, s, {
						alwaysWrapMedia: !0,
						height: y,
						showFull: !s.isListing,
						width: g
					}), e && o.a.createElement(o.a.Fragment, null, (!s.height || !h) && (t.isDeleted ? o.a.createElement("p", {
						className: p.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : o.a.createElement("div", {
						className: Object(a.a)(Object(u.a)({
							isLoading: !0
						}), p.a.tweetPlaceholder)
					})), o.a.createElement(l.a, {
						childRef: this.embedBoxChildRef,
						className: Object(a.a)(p.a.tweetEmbedBox, {
							[p.a.isInvisible]: !s.height || !h
						}),
						height: y,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? m.j : null,
						onLoad: n,
						showCentered: s.showCentered,
						showFull: !0,
						source: r,
						title: d,
						width: g
					}), s.isListing && y > m.j && o.a.createElement("div", {
						className: p.a.seeMore
					}, i.fbt._("See full tweet", null, {
						hk: "1bxtrd"
					}))))
				}
			}
			t.a = y
		},
		"./src/reddit/components/Media/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = "https://www.redditmedia.com"
		},
		"./src/reddit/components/Media/getResolution.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const n = (e, t, s, i) => {
					const n = e / t,
						o = s / i;
					return Math.abs(n - o) < .03
				},
				o = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				a = (e, t, s) => {
					for (let o = 0; o < s.length; o++) {
						const a = s[o];
						if (a.width >= i.e / 2 && n(e, t, a.height, a.width)) return a
					}
				},
				r = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = s("./src/lib/env/index.ts"),
				g = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				E = s("./src/lib/truncateText/index.ts"),
				v = s("./src/reddit/components/AdViewability/index.tsx"),
				O = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				w = s("./src/reddit/components/Media/constants.ts"),
				I = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				j = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				C = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				S = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				T = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				L = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				M = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				N = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				_ = s("./src/reddit/components/PlayButton/index.tsx"),
				P = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				R = s("./src/reddit/components/RichTextJson/index.tsx"),
				D = s("./src/reddit/constants/componentSizes.ts"),
				A = s("./src/reddit/constants/experiments.ts"),
				V = s("./src/reddit/constants/screenWidths.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				W = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				F = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				H = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				U = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				G = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				Y = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/selectors/experiments/postSeo.ts"),
				z = s("./src/reddit/selectors/media.ts"),
				J = s("./src/reddit/selectors/postCreations.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/seo/index.ts"),
				X = s("./src/reddit/components/Media/getResolution.ts"),
				Z = s("./src/reddit/components/Media/index.m.less"),
				$ = s.n(Z);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(o.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"
					}
				}, {
					ssr: !1
				}),
				se = Object(m.a)(O.b, {
					playerName: "Reddit Player"
				}),
				ie = 300,
				ne = " - ",
				oe = 1200,
				ae = 75,
				re = "player.js",
				de = D.r + D.q,
				le = e => e.isVisible ? e.children : l.a.createElement("div", {
					className: $.a.displayNone
				}, e.children),
				ce = new Set([Y.o.EMBED, Y.o.GIFVIDEO, Y.o.LIVEVIDEO, Y.o.VIDEO]),
				ue = e => !!e.media && ce.has(e.media.type),
				me = new Set([Y.o.EMBED, Y.o.GALLERY, Y.o.GIFVIDEO, Y.o.IMAGE, Y.o.LIVEVIDEO, Y.o.VIDEO]),
				he = e => {
					let {
						post: t
					} = e;
					return !!t.media && me.has(t.media.type)
				},
				pe = Object(k.t)(),
				be = Object(u.c)({
					imgOCRAltTextVariant: (e, t) => Object(Q.c)(e, t) ? Object(K.b)(e, t.post, !0) : void 0,
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(K.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(K.k)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(q.bb)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(J.G)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(Q.c)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const o = Object(z.b)(e, i.id);
						return !(void 0 !== o || !n) || !!o
					}
				}),
				ge = Object(c.b)(be),
				xe = Object(x.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class fe extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && Y.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === Y.o.EMBED ? e.provider : null;
								this.pauseEmbed(this.iframe, t)
							}
							this.setState(e => e.shouldStop ? null : {
								shouldStop: !0
							})
						}
					}, this.handleVisibilityChange = e => {
						const {
							shouldPause: t
						} = this.state, {
							autoplayPref: s
						} = this.props;
						this.iframe && (t || !s && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							forcePause: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {
						this.iframe && this.setState(e => {
							let {
								canLoadContent: t
							} = e;
							return t ? {
								canLoadContent: !1
							} : null
						})
					}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && Y.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && Y.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === Y.o.EMBED ? t.provider : null;
								i && !Y.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
							}
							e ? this.setState(e => e.shouldPause || !e.canLoadContent ? {
								canLoadContent: !0,
								shouldPause: !1,
								shouldStop: !1
							} : null) : this.setState(e => e.shouldPause ? null : {
								shouldPause: !0
							})
						}
					}, 250, {
						leading: !0
					}), this.toggleEmbedAutoplay = (e, t) => {
						if (e.contentWindow) {
							const s = t ? Y.g.Pause : Y.g.Play;
							e.contentWindow.postMessage({
								context: re,
								method: s
							}, w.a), e.contentWindow.postMessage({
								context: re,
								method: Y.g.Mute
							}, w.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === Y.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: Y.B.Pause
						}), w.a) : e.contentWindow.postMessage({
							context: re,
							method: Y.g.Pause
						}, w.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === Y.o.EMBED ? e.provider : null;
						if (this.iframe && s && !Y.s.has(s)) {
							const {
								shouldPause: e
							} = this.state;
							(t || e) && this.toggleEmbedAutoplay(this.iframe, e)
						}
					}, this.onClickRevealBlurred = e => {
						this.props.isListing && !this.props.isGalleryTileLayout || !this.shouldBlur() || this.state.isRevealed || (this.setState({
							isRevealed: !0
						}), e.preventDefault(), e.stopPropagation())
					}, this.storeChildRef = e => {
						this.iframe = e
					}, this.updateDimensions = () => {
						this.setState({
							viewportHeight: window.innerHeight,
							viewportWidth: window.innerWidth
						})
					}, this.isSpoiler = () => this.props.post.isSpoiler || !(!this.props.crosspost || !this.props.crosspost.isSpoiler), this.isNSFW = () => this.props.post.isNSFW || !(!this.props.crosspost || !this.props.crosspost.isNSFW), this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: Y.e,
						viewportWidth: Y.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					ue(this.props.post) && (this.visibilityChangeSubscriptionId = f.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && he(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && f.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && he(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						imgOCRAltTextVariant: e,
						OCRAltText: t,
						post: s,
						subredditOrProfileDisplayText: i,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let o = "";
					return i && (o += i), e === A.Lb.OCR ? o += "".concat(ne).concat(t) : s.title && (o += "".concat(ne).concat(s.title)), e === A.Lb.ShortPostTitleOCR && (o += "".concat(ne).concat(t)), o.length > ie ? Object(E.a)(o, ie, h.cb) : o
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Y.j, this.state.viewportHeight),
						s = Math.min(oe, 16 * t / 9);
					s === oe && (t = 9 * oe / 16), e = this.state.viewportWidth >= V.c ? this.state.viewportWidth < D.l ? this.state.viewportWidth - de - 2 * ae : this.state.viewportWidth - de - D.e - 2 * ae : this.state.viewportWidth - 2 * ae;
					const i = this.state.viewportHeight - 2 * ae;
					if (s > e) {
						t *= e / s, s = e
					} else if (t > i) {
						const e = i / t;
						t = i, s *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: s
					}
				}
				getVideoMaxDimensions(e, t) {
					let s = Y.j,
						i = Y.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = Y.t, i = Y.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: s,
						isListing: i,
						post: n
					} = e;
					if (Object(Y.H)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * ae,
						height: this.state.viewportHeight - 2 * ae
					};
					const o = n.media && n.media.obfuscated || "";
					let a = !n.media || Object(Y.L)(n.media) || Object(Y.F)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(Y.I)(n.media) || Object(Y.K)(n.media) || Object(Y.F)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(Y.F)(n.media)) {
						r = Object(F.b)(n.media.mediaMetadata || {}, Object(F.c)(i), Y.p, s) + Y.i, d = s
					}
					if (s && n.media && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						const e = X.b(s, n.media.resolutions);
						e && (a = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						let e;
						(e = Object(Y.J)(n.media.height, n.media.width) && Object(C.b)(n.media.height) ? X.c(n.media.height, n.media.width, n.media.resolutions) : X.a(n.media.resolutions)) && (a = e.url, d = e.width, r = e.height)
					}
					if (e.isExpando)
						if (d > t.viewportWidth) {
							r *= t.viewportWidth / d, d = t.viewportWidth
						} else if (r > t.viewportHeight) {
						const e = t.viewportHeight / r;
						r = t.viewportHeight, d *= e
					}
					const {
						maxVideoHeight: l,
						maxVideoWidth: c
					} = this.getVideoMaxDimensions(e, t);
					if (n.media && n.media.type === Y.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > Y.c ? (r = l, d = Math.min(Math.max(l / t, Y.r), c)) : (r = Math.min(Math.max(c * t, Y.q), l), d = c)
					}
					n.media && n.media.type === Y.o.EMBED && e.isExpando && n.media.provider !== Y.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - Y.c) > .01
					}
					return {
						source: a,
						obfuscated: o,
						width: d,
						height: r,
						needsBackgroundBlur: u
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: s
					} = this.props, i = this.isNSFW(), n = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || n)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: n,
						isExpando: o,
						isGalleryTileLayout: a,
						isListing: r,
						isMediumHeight: d,
						isNotCardView: c,
						isTitleOnly: u,
						post: m,
						showCentered: h,
						showFull: p = !1,
						subredditOrProfileDisplayText: x
					} = this.props, {
						canLoadContent: f,
						forcePause: E,
						shouldPause: O,
						shouldStop: w,
						viewportWidth: D
					} = this.state;
					if (!m.media) return null;
					const A = E || O,
						V = w,
						{
							source: k,
							obfuscated: K,
							height: z,
							width: J,
							needsBackgroundBlur: q
						} = this.getMediaInfo(this.props, this.state),
						Q = {
							showCentered: h,
							isListing: r,
							showFull: p,
							height: z,
							width: J
						},
						X = Object.assign(Object.assign({}, Q), {
							className: e,
							forceAspectRatio: i,
							viewportWidth: D
						}),
						Z = this.shouldBlur(),
						ie = !(!m.isSponsored || !m.source);
					if (K && Z) return l.a.createElement(S.a, ee({}, X, {
						blurSrc: K
					}), l.a.createElement(le, {
						isVisible: f
					}, l.a.createElement(C.a, ee({}, Q, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: r,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === Y.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: m.id,
						shouldBlur: Z,
						source: K,
						outboundUrl: ie && m.source.outboundUrl || void 0,
						originalSource: k
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case Y.o.RTJSON:
							const i = Object(W.a)(m, null);
							if (null === i) return;
							return p || Object(B.a)(m) ? l.a.createElement(l.a.Fragment, null, l.a.createElement(L.a, {
								canLoadContent: f,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: d,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: u,
								postId: m.id,
								showFull: p
							}, l.a.createElement(R.a, {
								altText: this.getAltText(),
								flairStyleTemplate: s,
								content: m.isMeta ? Object(G.a)(i, m.id) : i,
								mediaMetadata: m.media.mediaMetadata,
								postId: m.id,
								rtJsonElementProps: xe(this.props),
								renderMediaAsLinks: r
							})), l.a.createElement(T.a, {
								postId: m.id,
								isCommentsPage: !!n
							})) : null;
						case Y.o.TEXT:
							if (Object(H.a)(m)) {
								const t = "Text post should not include body content";
								return y.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: r,
										isCommentsPage: n
									}), y.c.captureMessage(t)
								}), Object(b.a)() && console.log("".concat(m.id, ": ").concat(t)), l.a.createElement(l.a.Fragment, null, l.a.createElement(L.a, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: p
								}, l.a.createElement(P.a, {
									flairStyleTemplate: s,
									html: m.isMeta ? Object(U.a)(m.media.content, m.id, $.a.hiddenLink) : m.media.content
								})), l.a.createElement(T.a, {
									postId: m.id,
									isCommentsPage: !!n
								}))
							}
							return l.a.createElement(T.a, {
								postId: m.id,
								isCommentsPage: !!n
							});
						case Y.o.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? l.a.createElement(S.a, ee({}, X, {
								alwaysWrapMedia: !0
							}), l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(C.a, ee({}, Q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: Z,
								source: m.preview.url,
								originalSource: m.preview.url
							})), l.a.createElement(_.a, null)))) : Y.h.has(m.media.provider) ? m.media.provider === Y.v.Twitter ? l.a.createElement(M.a, {
								canLoadContent: f,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: X,
								onIframeLoaded: this.onIframeLoaded,
								source: k,
								title: m.title
							}) : l.a.createElement(S.a, ee({}, X, {
								alwaysWrapMedia: !0,
								height: o ? z : Y.j,
								width: o ? J : Y.j * (16 / 9)
							}), f && l.a.createElement(I.a, {
								childRef: this.storeChildRef,
								height: o ? z : Y.j,
								width: o ? J : void 0,
								isListing: r,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: h,
								showFull: p,
								source: k,
								title: m.title
							})) : l.a.createElement(S.a, ee({}, X, {
								alwaysWrapMedia: !0
							}), f && l.a.createElement(I.a, ee({}, Q, {
								isResponsive: o || m.media.provider === Y.v.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: k,
								fullWidth: m.media.provider === Y.v.IFrameEmbed
							})));
						case Y.o.GIFVIDEO: {
							let e = z,
								t = J;
							return e > Y.j && (t = J / z * (e = Y.j)), l.a.createElement(S.a, ee({}, X, {
								blurSrc: q ? m.media.gifBackgroundImage : void 0
							}), l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(N.a, ee({}, Q, {
								isNotCardView: c,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: A,
								source: k,
								originalSource: m.media.content
							}))))
						}
						case Y.o.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(S.a, ee({}, X, {
								alwaysWrapMedia: !0
							}), l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(C.a, ee({}, Q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: Z,
								source: e,
								originalSource: e
							})), l.a.createElement(_.a, null))));
							const s = l.a.createElement(S.a, ee({}, X, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), f && l.a.createElement(se, {
								autoPlay: "boolean" == typeof O ? !O : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: A,
								shouldStop: V,
								hlsSource: m.media.hlsUrl,
								mpegDashSource: m.media.dashUrl,
								isGif: m.media.isGif,
								scrubberThumbSource: m.media.scrubberThumbSource,
								postId: m.id,
								callToActionSource: m.source || void 0,
								callToActionText: m.callToAction,
								isListing: r,
								posterUrl: m.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: m.id,
								muxVideoIsLive: !1,
								muxVideoTitle: m.title
							}));
							return m.isSponsored ? l.a.createElement(v.a, {
								post: m,
								trackVideo: !0
							}, s) : s
						}
						case Y.o.LIVEVIDEO:
							return l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(te, {
								canLoad: f,
								postId: m.id,
								postTitle: m.title,
								shouldPause: A || V,
								url: m.media.hlsUrl
							}));
						case Y.o.IMAGE:
							const E = this.state.viewportHeight - 2 * ae,
								w = this.state.viewportWidth - 2 * ae;
							let D = k;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(g.a)(m.thumbnail.url) ? D = m.thumbnail.url : m.preview && Object(g.a)(m.preview.url) && (D = m.preview.url)), l.a.createElement(S.a, ee({}, X, {
								blurSrc: q ? D : void 0,
								isExpando: !!o
							}), l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(C.a, ee({}, Q, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? E : void 0,
								maxWidth: o ? w : void 0,
								postId: m.id,
								shouldBlur: Z,
								source: D,
								outboundUrl: ie && m.source.outboundUrl || void 0,
								isSponsored: m.isSponsored,
								originalSource: m.media.content
							}))));
						case Y.o.GALLERY:
							const K = Object(F.b)(m.media.mediaMetadata || {}, Object(F.c)(r), Y.p, J),
								ne = Object(F.a)(m.media.gallery, m.isSponsored);
							return l.a.createElement(S.a, ee({}, X, {
								blurSrc: q ? k : void 0,
								isExpando: !!o,
								maxGalleryHeight: K + ne,
								className: $.a.galleryMediaContainer,
								isGalleryTileLayout: a
							}), l.a.createElement(le, {
								isVisible: f
							}, l.a.createElement(j.a, {
								postId: m.id,
								postTitle: m.title,
								subredditName: x,
								galleryItems: m.media.gallery ? m.media.gallery.items : [],
								mediaMetadata: m.media.mediaMetadata || {},
								imageHeight: K,
								captionHeight: ne,
								isSponsored: m.isSponsored,
								className: this.props.imageBoxClassName,
								isListing: r,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: Z,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!a,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption
							})));
						default:
							return null
					}
				}
			}
			t.a = pe(ge(Object(p.a)(fe)))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, s = c(e, ["flairStyleTemplate"]);
				return n.a.createElement(d.a, l({
					style: {
						color: Object(r.a)(Object(a.a)(Object.assign({
							flairStyleTemplate: t
						}, s)))
					}
				}, s))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "h", (function() {
				return r
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = s.n(i),
				o = s("./src/reddit/models/Media/index.ts");

			function a(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}

			function r(e) {
				const t = u(e),
					s = t.every(e => e.y > e.x),
					i = t.every(e => e.x > e.y);
				return !s && !i
			}

			function d(e, t, s) {
				const i = u(e);
				if (p(i, t)) return !0;
				const n = m(i).y;
				return !n || n < s
			}
			const l = e => e ? o.j : o.e;

			function c(e, t, s, i) {
				const n = u(e);
				if (p(n, t)) return t;
				const o = m(n);
				let a = o.y;
				return !a || a < s ? s : (i > 0 && (a = i * a / o.x), a > t ? t : a)
			}
			const u = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				m = e => e.reduce((e, t) => h(e, t), e && e[0] || []),
				h = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				p = (e, t) => e.some(e => e.y > t && Object(o.J)(e.y, e.x));

			function b(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? o.i : 0
			}
			const g = e => {
				const t = n.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			}
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				n = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(n.G)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let n = [];
					try {
						for (const o of t)
							if ("link" === o.e && o.u && o.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (o.c && "string" != typeof o.c) {
							const t = e(o.c, s);
							t.found ? (i = !0, ("par" !== o.e || t.updated.length) && n.push(Object.assign(Object.assign({}, o), {
								c: t.updated
							}))) : n.push(o)
						} else n.push(o)
					} catch (o) {
						i = !1, n = []
					}
					return {
						found: i,
						updated: i ? n : t
					}
				}(e.document, Object(i.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(i.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(i.c)(t)))
			}
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/selectors/poll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			}));
			var i = s("./src/reddit/models/Comment/index.ts"),
				n = s("./src/reddit/models/Poll/index.ts"),
				o = s("./src/reddit/selectors/comments.ts");
			const a = (e, t) => {
					let {
						postId: s
					} = t;
					return e.posts.metaMap[s]
				},
				r = (e, t) => {
					let {
						postId: s
					} = t;
					const i = a(e, {
						postId: s
					});
					if (i) return e.polls.models[i]
				},
				d = (e, t) => {
					let {
						postId: s
					} = t;
					const i = r(e, {
						postId: s
					});
					return i && Object(n.e)(i) ? i : null
				},
				l = (e, t) => {
					let {
						commentId: s
					} = t;
					const n = Object(o.n)(e, {
						commentId: s
					});
					return n && n.commentType === i.a.Prediction && d(e, n) || null
				},
				c = (e, t) => {
					let {
						postId: s
					} = t;
					const i = a(e, {
						postId: s
					});
					if (i) return e.polls.rewards[i]
				},
				u = (e, t) => {
					let {
						postId: s
					} = t;
					const i = a(e, {
						postId: s
					});
					if (i) return e.polls.results.byVotingPower[i]
				},
				m = (e, t) => {
					let {
						postId: s
					} = t;
					const i = a(e, {
						postId: s
					});
					if (i) return e.polls.results.byVoters[i]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.8c92aa589e8158aa761d.js.map