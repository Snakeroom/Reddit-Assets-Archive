// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.39306c77b3f3acc0413d.js
// Retrieved at 10/19/2022, 1:30:25 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const r = m(n.target, n.currentTarget),
						a = p(n.target, n.currentTarget);
					r && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, r, a)) : s(s => {
						const i = t(e, r, a)(s);
						let n;
						if (i && i.actionInfo) {
							const {
								pageType: e,
								...t
							} = i.actionInfo;
							n = t
						}
						return {
							...i,
							actionInfo: Object(o.S)(s, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
				}
			});

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: o,
						...l
					} = t, c = Object(i.useCallback)(d(o, r, s), [o, r, s]);
					return n.a.createElement(e, a({}, l, {
						afterClickTracking: c
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const c = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(o.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Je
				});
				return Object(u.vg)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ke
				});
				return Object(u.vg)(t) ? void 0 : t
			}, (e, t) => e === u.Le.Enabled && t === u.Le.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
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
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const v = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(f).join("")
			})(E.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				w = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
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
					localStorageSaltKey: f,
					localStorageViewerUserIdKey: E,
					playerName: C,
					playerVersion: I,
					respectDoNotTrack: S,
					saltLength: j,
					saltTimeToLive: T,
					viewerUserIdLength: M
				} = {
					...w,
					...t
				};
				class L extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...s
						} = this.props, i = s;
						return n.a.createElement(e, y({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await c();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await c();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await c();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${x()}${e}${t}`;
						return (await v(s)).substr(0, L.VIEWER_USER_ID_LENGTH)
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
						return {
							debug: L.DEBUG,
							disableCookies: L.DISABLE_COOKIES,
							respectDoNotTrack: L.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: L.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: L.PLAYER_NAME,
								player_version: L.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = L.LOCAL_STORAGE_SALT_KEY;
						let t = Object(a.a)(e);
						return t || (t = g(L.SALT_LENGTH), Object(a.b)(e, t, L.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? L.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
							video_title: i,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				L.displayName = O(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = l, L.DISABLE_COOKIES = u, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = m, L.LOCAL_STORAGE_SALT_KEY = f, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, L.PLAYER_NAME = C, L.PLAYER_VERSION = I, L.RESPECT_DO_NOT_TRACK = S, L.SALT_LENGTH = j, L.SALT_TIME_TO_LIVE = T, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = M;
				const N = Object(i.forwardRef)((e, t) => n.a.createElement(L, y({}, e, {
						forwardedRef: t
					}))),
					P = Object(o.c)({
						redditUserId: b.i,
						isMuxEnabled: p
					});
				return Object(r.b)(P, null, null, {
					forwardRef: !0
				})(N)
			}
		},
		"./src/lib/truncateText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const i = /\s*[,-:;\u2013\u2014]\s*$/;

			function n(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (e.length <= t || t < 0) return e;
				if ((e = e.trim().replace(/\s+/g, " ")).length <= t) return e;
				t -= s.length;
				let n = e.lastIndexOf(" ", t);
				return n = n > 0 ? n : t, e.slice(0, n).replace(i, "").trimRight() + s
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
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
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
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, s) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				o = s.n(r),
				a = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return n.a.createElement("div", {
					className: o.a.optionalText
				}, n.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
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
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/lib/truncateText/index.ts"),
				u = s("./src/reddit/helpers/trackers/gallery.ts");
			var m = (e, t, s) => {
					const n = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", n), () => {
							t && t.removeEventListener("keydown", n)
						}
					}, [t, n])
				},
				p = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				x = s("./src/reddit/actions/media.ts"),
				f = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/components/Media/BlurredContent.tsx"),
				v = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/keycodes.ts"),
				O = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/selectors/media.ts"),
				I = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				j = s.n(S);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: r,
					imgAltText: o
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(a.a)({
						[j.a.slideImageMainDiv]: !i
					})
				}, r && n.a.createElement("img", {
					src: d,
					alt: o,
					className: j.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: j.a.seeMore
				}, T._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, L = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: r,
					originalImage: o,
					imgAltText: d,
					isListing: l,
					isNSFW: c,
					isNsfwBlockingModalEligible: u,
					isSpoiler: m,
					isSponsored: p,
					isReadyToShow: h,
					shouldBlur: b
				} = e, g = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, x = Object(O.c)(l), f = o.y > x && Object(w.L)(o.y, o.x), v = f ? {} : {
					maxHeight: "100%"
				};
				let y;
				return y = i || (f ? o : "gif" in o ? o : r), n.a.createElement("li", {
					style: g,
					className: j.a.slide
				}, n.a.createElement("figure", {
					className: Object(a.a)({
						[j.a.tallImage]: f,
						[j.a.commonImage]: !f
					}, j.a.figure)
				}, l || p ? n.a.createElement(M, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: h,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in o ? o.u : o.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(a.a)({
						[j.a.tallImage]: f,
						[j.a.commonImage]: !f
					}, j.a.imageLink)
				}, n.a.createElement(M, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: h,
					imgAltText: d
				}), b && !u && n.a.createElement(E.a, {
					isNSFW: !!c,
					isSpoiler: !!m
				}))))
			}, N = e => n.a.createElement("a", {
				className: Object(a.a)(e.className, j.a.navigationUnderlay, {
					[j.a.hasMoreSlides]: e.hasMoreSlides
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
				className: Object(a.a)(e.iconClassName, j.a.icon)
			}, n.a.createElement(h.a, {
				className: j.a.iconImage
			}))), P = e => n.a.createElement("div", {
				className: j.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: j.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: j.a.imageUrl
			}, n.a.createElement("a", {
				className: j.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: j.a.urlText
			}, Object(O.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: j.a.linkIcon
			})))), k = e => n.a.createElement("div", {
				className: j.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: j.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), _ = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, D = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			t.a = e => {
				const t = Object(r.d)(),
					{
						captionHeight: s,
						galleryItems: h,
						imageHeight: b,
						isListing: g,
						isSponsored: S,
						isTileLayout: M,
						mediaMetadata: R = {},
						post: A,
						postId: B,
						postTitle: V,
						shouldShowTileLayoutOption: W,
						showPromotedCTA: H,
						subredditName: U,
						isVisible: F
					} = e,
					G = Object(r.e)(e => Object(C.d)(e, B)),
					K = G > 0,
					J = G < h.length - 1,
					Y = Object(p.a)(),
					$ = Object(i.useRef)(null),
					z = Object(i.useRef)(null),
					[q, Q] = Object(i.useState)(F ? G : -1),
					[X, Z] = Object(i.useState)(F ? G : -1),
					ee = Object(l.a)(F),
					te = Object(l.a)(G);
				Object(i.useEffect)(() => {
					(void 0 !== ee && ee !== F && F && q < 0 && X < 0 || void 0 !== te && te !== G && F && (q > G || X < G)) && (Q(_(G, 1)), Z(D(G, h.length, 1)))
				}, [ee, G, F, q, X, te, h.length, B]);
				const se = Object(i.useRef)(),
					ie = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (q < 0 || X - q == 0) && (se.current = setTimeout(() => {
								const e = D(X, h.length);
								e !== X && Z(e)
							}, 1e3)) : (q < 0 || X - q == 0) && clearTimeout(se.current)
						})
					}, [q, X, h.length]);
				Object(o.a)(z, ie);
				const ne = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: B,
							index: e
						}))
					}, [t, B]),
					re = Object(i.useCallback)(e => {
						t(Object(f.y)(A, v.a.GalleryItemImpression, `Slide${e}`))
					}, [t, A]),
					oe = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: B,
							isTileLayout: !M
						}))
					}, [t, B, M]),
					ae = Object(i.useCallback)(() => {
						if (!J) return;
						const e = G + 1;
						if (e + 1 >= X) {
							const e = D(X, h.length);
							e !== X && Z(e)
						}
						ne(e), Y(u.b(B, e)), Y(u.d(B, e + 1)), re(e)
					}, [J, G, re, ne, Y, B, X, h.length]),
					de = Object(i.useCallback)(() => {
						if (!K) return;
						const e = G - 1;
						if (e - 1 <= q) {
							const e = _(q);
							e !== q && Q(e)
						}
						const t = G + 1;
						ne(e), Y(u.a(B, t)), Y(u.d(B, t - 1)), re(e)
					}, [K, G, re, ne, Y, B, q]),
					le = Object(i.useCallback)(() => {
						const e = h[G] && h[G].outboundUrl;
						e && Y(u.c(B, e))
					}, [Y, B, G, h]);
				m(y.a.ArrowLeft, $.current, de), m(y.a.ArrowRight, $.current, ae);
				const ce = h[G] && h[G].caption,
					ue = h[G] && h[G].outboundUrl,
					me = ((e, t, s) => {
						const i = Object(O.f)(e),
							n = Object(O.g)(i),
							r = n.x / n.y < 1,
							o = Object(O.h)(e),
							a = Object(O.i)(e || {}, Object(O.c)(s), w.p);
						return s || a || o || r ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(R, b, g);
				return n.a.createElement("div", {
					"data-adclicklocation": I.a.MEDIA,
					className: Object(a.a)(j.a.outerContainer),
					ref: $,
					tabIndex: 0
				}, M ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(a.a)(j.a.tilesWrapper, {
						[j.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, h.map((t, s) => {
					const i = t.mediaId,
						r = R && R[i];
					if (!r || !r.s) return null;
					const o = [...r && r.s ? [r.s] : [], ...r && r.p ? r.p : []],
						a = Object(O.d)(w.y, o);
					if (!a) return null;
					const d = r.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in a&&a.u})`
						},
						className: j.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), oe(), ne(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: j.a.tilePlaceholder
				}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && n.a.createElement(E.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: j.a.slideshowContainer,
					tabIndex: -1,
					ref: z,
					onClick: e.onClickRevealBlurred,
					style: me
				}, n.a.createElement("div", {
					className: j.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: j.a.slideWrapper
				}, h.map((t, s) => {
					const i = t.mediaId,
						r = R && R[i];
					if (!r || !r.s) return null;
					const o = t.caption ? t.caption : V,
						a = Object(c.a)(U ? `${U} - ${o}` : o, 300, d.nb),
						l = [...r && r.s ? [r.s] : [], ...r && r.p ? r.p : []],
						u = Object(O.d)(b, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(O.d)(b, r.o || []) || void 0,
						p = s >= q && s <= X;
					return n.a.createElement(L, {
						slideIndex: s,
						currentIndex: G,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: r.s,
						isListing: e.isListing,
						isSponsored: S,
						key: i,
						isReadyToShow: p,
						imgAltText: a,
						shouldBlur: e.shouldBlur,
						isNSFW: e.isNSFW,
						isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
						isSpoiler: e.isSpoiler
					})
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(N, {
					onClick: de,
					setFocusTo: z,
					hasMoreSlides: K,
					title: T._("Previous", null, {
						hk: "3dZcTi"
					}),
					iconClassName: j.a.prevIcon,
					className: j.a.prevButton
				}), n.a.createElement(N, {
					onClick: ae,
					setFocusTo: z,
					hasMoreSlides: J,
					title: T._("Next", null, {
						hk: "3Ajk1H"
					}),
					iconClassName: j.a.nextIcon,
					className: j.a.nextButton
				}))), h.length > 1 ? n.a.createElement(k, {
					currentSlide: G + 1,
					totalSlides: h.length,
					toggleTileLayout: W && oe || void 0
				}) : ""), !ce && !ue || M || H ? !!s && !M && !H && n.a.createElement("div", {
					className: j.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(P, {
					caption: ce,
					onClickEvent: le,
					outboundUrl: ue,
					captionHeight: s
				}))
			}
		},
		"./src/reddit/components/Media/PollContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/models/Prediction/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Poll/async.ts");
			const u = Object(o.c)({
				poll: d.e
			});
			t.a = Object(r.b)(u)(e => {
				let {
					isCommentsPage: t,
					poll: s,
					postId: i
				} = e;
				return s ? Object(a.c)(s) ? n.a.createElement(l.a, {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/componentSizes.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(u);
			class p extends n.a.Component {
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
			var h = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.x)(t))
			}))(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: u,
					isTitleOnly: p,
					postId: g,
					showFull: x,
					...f
				} = e;
				const E = {
						[m.a.richTextContainerFull]: x,
						[m.a.richTextContainerTitleOnly]: p && !x,
						[m.a.richTextContainer]: !x && !p
					},
					v = {};
				x || (v.maxHeight = p ? `${a.m}px` : l ? `${a.l}px` : `${a.k}px`), d && (v.maxWidth = `${o.d}px`);
				const y = c && x;
				return n.a.createElement("div", b({
					className: Object(r.a)(E, i),
					style: v
				}, f), s, y && n.a.createElement(h, {
					canLoadContent: !!t,
					isExpando: u,
					postId: g
				}))
			}
		},
		"./src/reddit/components/Media/ShredditPlayerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/sentry/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/helpers/trackers/media.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/selectors/platform.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(n.memo)(Object(a.b)(e => {
				const t = Object(n.useRef)(),
					a = Object(n.useRef)(),
					p = Object(l.a)(),
					[h, b] = Object(n.useState)("ready"),
					{
						autoplay: g,
						hlsSource: x,
						isOverlay: f,
						postId: E,
						posterUrl: v,
						scrubberThumbSource: y
					} = e || {},
					O = x || void 0,
					w = Object(o.e)(c.i),
					C = !f && w;
				Object(n.useEffect)(() => {
					"ready" === h && async function() {
						try {
							b("importing"), await Promise.all([s.e("vendors~shreddit-player").then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js")), s.e("vendors~shreddit-player").then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js"))]), b("done")
						} catch (e) {
							console.error("Error importing shreddit-player", e), b("error"), i.c.withScope(t => {
								t.setExtra("info", {
									postId: E
								}), i.c.captureException(e)
							})
						}
					}()
				}, [h, E]), Object(n.useEffect)(() => {
					if ("done" !== h) return;
					const e = e => {
							e.stopPropagation();
							const {
								details: t
							} = (null == e ? void 0 : e.detail) || {};
							E && t && p(Object(d.b)(E, t.action, t.noun, t.media))
						},
						{
							current: s
						} = t;
					return null == s || s.addEventListener("track-event", e), () => {
						null == s || s.removeEventListener("track-event", e)
					}
				}, [h, t, E, p]), Object(n.useEffect)(() => {
					var e;
					if ("done" !== h) return;
					const {
						current: t
					} = a;
					if (C && !(null === (e = null == t ? void 0 : t.hlsElement) || void 0 === e ? void 0 : e.hasAttribute("paused"))) try {
						null == t || t.pause()
					} catch (s) {}
				}, [h, C, a]);
				const I = {
						cursor: "default",
						height: "100%",
						width: "100%",
						maxHeight: "100%",
						maxWidth: "100%",
						backgroundColor: "black",
						color: "white"
					},
					S = {
						onClick: e => {
							e.stopPropagation()
						},
						style: I,
						"data-testid": "shreddit-player-wrapper"
					};
				if ("ready" === h || "importing" === h) return r.a.createElement("div", u({}, S, {
					style: {
						backgroundColor: "black",
						height: "100%",
						width: "100%"
					}
				}));
				if ("error" === h) return r.a.createElement("div", u({}, S, {
					style: {
						...I,
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}
				}), m._("Sorry, something went wrong when loading this video.", null, {
					hk: "9N3Tr"
				}));
				const j = {
					ref: a,
					autoplay: !!g && !C,
					playOutOfViewport: f,
					poster: v,
					preview: y || void 0,
					src: O,
					ui: "desktop"
				};
				for (const s in j) !1 === j[s] && delete j[s];
				return r.a.createElement("div", S, r.a.createElement("media-telemetry-observer", {
					ref: t
				}, r.a.createElement("shreddit-player", j, r.a.createElement("source", {
					src: O,
					type: "application/vnd.apple.mpegURL"
				}))))
			}), (function(e, t) {
				const s = null == e ? void 0 : e.hlsSource,
					i = null == t ? void 0 : t.hlsSource;
				if (s && i && s.split("?")[0] !== i.split("?")[0]) return !1;
				for (const n of Object.keys(t).filter(e => "hlsSource" !== e))
					if (e[n] !== t[n]) return !1;
				return !0
			}))
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetContainer: "_2yB7G9L-6O_6Lp6D0n7EAl",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				c = s("./src/reddit/components/Media/constants.ts"),
				u = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const f = 550,
				E = 100,
				v = 300;

			function y(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: b,
					embedBoxChildRef: y,
					source: O,
					title: w,
					postId: C
				} = e, [I, S] = Object(n.useState)(!1), j = Object(d.a)(t), T = Object(n.useRef)(), {
					height: M,
					isDeleted: L
				} = Object(o.e)(e => e.mediaEmbed[C] || {}), N = I ? L ? E : M : v;

				function P(e) {
					var t;
					I || (null === (t = null == T ? void 0 : T.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || S(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					T.current && Object(l.b)(T.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && j && S(!1)
				}, [j, t]), r.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: N + 8,
					showFull: !s.isListing,
					width: f
				}), t && r.a.createElement("div", {
					className: g.a.tweetContainer,
					style: {
						height: N
					}
				}, !I && r.a.createElement("div", {
					className: Object(a.a)(Object(p.a)({
						isLoading: !0
					}), g.a.tweetPlaceholder)
				}), I && L && r.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), r.a.createElement(u.a, {
					childRef: function(e) {
						T.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !M && s && (S(!1), e.contentWindow.postMessage("twitter-measure-requested", c.a))
						}), y(e)
					},
					className: Object(a.a)(g.a.tweetEmbedBox, {
						[g.a.isInvisible]: !I || L
					}),
					fullWidth: !0,
					height: N,
					isListing: s.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: s.isListing ? h.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: O,
					title: w
				}), s.isListing && N > h.j && r.a.createElement("div", {
					className: g.a.seeMore
				}, i.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
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
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const n = (e, t, s, i) => {
					const n = e / t,
						r = s / i;
					return Math.abs(n - r) < .03
				},
				r = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				o = (e, t, s) => {
					for (let r = 0; r < s.length; r++) {
						const o = s[r];
						if (o.width >= i.e / 2 && n(e, t, o.height, o.width)) return o
					}
				},
				a = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Be
			}));
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				d = s("./node_modules/lodash/noop.js"),
				l = s.n(d),
				c = s("./node_modules/react/index.js"),
				u = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				h = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				b = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = s("./src/higherOrderComponents/withMux/index.tsx"),
				x = s("./src/lib/ads/utils.ts"),
				f = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = s("./src/lib/env/index.ts"),
				O = s("./src/lib/isUrl/index.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				I = s("./src/lib/sentry/index.ts"),
				S = s("./src/lib/truncateText/index.ts"),
				j = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/components/AdViewability/index.tsx"),
				M = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				L = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				N = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				P = s("./src/reddit/components/Media/constants.ts"),
				k = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				_ = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				D = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				R = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				A = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				B = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				V = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				W = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				H = s("./src/reddit/components/PlayButton/index.tsx"),
				U = s("./src/reddit/components/PostList/index.tsx"),
				F = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				G = s("./src/reddit/components/RichTextJson/index.tsx"),
				K = s("./src/reddit/constants/componentSizes.ts"),
				J = s("./src/reddit/constants/screenWidths.ts"),
				Y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				Q = s("./src/reddit/helpers/path/index.ts"),
				X = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				Z = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				ee = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				te = s("./src/reddit/models/Media/index.ts"),
				se = s("./src/reddit/selectors/experiments/d2xShredditPlayer.ts"),
				ie = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				ne = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				re = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				oe = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ae = s("./src/reddit/selectors/media.ts"),
				de = s("./src/reddit/selectors/meta.ts"),
				le = s("./src/reddit/selectors/postCreations.ts"),
				ce = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/seo/index.ts"),
				me = s("./src/reddit/selectors/telemetry.ts"),
				pe = s("./src/reddit/selectors/user.ts"),
				he = s("./src/reddit/components/Media/getResolution.ts"),
				be = s("./src/reddit/components/Media/ShredditPlayerWrapper/index.tsx"),
				ge = s("./src/reddit/components/Media/index.m.less"),
				xe = s.n(ge);

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(r.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
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
				ve = Object(g.a)(L.b, {
					playerName: "Reddit Player"
				}),
				ye = 300,
				Oe = " - ",
				we = 1200,
				Ce = 75,
				Ie = "player.js",
				Se = K.q + K.p,
				je = e => u.a.createElement("div", {
					className: Object(f.a)(xe.a.visibilityWrapper, {
						[xe.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Te = new Set([te.o.EMBED, te.o.LIVEVIDEO, te.o.VIDEO, te.o.GIFVIDEO]),
				Me = e => !!e.media && Te.has(e.media.type),
				Le = new Set([te.o.EMBED, te.o.GALLERY, te.o.GIFVIDEO, te.o.IMAGE, te.o.LIVEVIDEO, te.o.VIDEO]),
				Ne = e => {
					let {
						post: t
					} = e;
					return !!t.media && Le.has(t.media.type)
				},
				Pe = Object(Y.u)(),
				ke = Object(p.c)({
					canUseOCRAltText: (e, t) => Object(oe.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(oe.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(oe.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ce.V)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(le.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(ue.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const r = Object(ae.e)(e, i.id);
						return !(void 0 !== r || !n) || !!r
					},
					pageType: e => Object(me.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ce.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: ne.b,
					isBlockingInterstitialV2Enabled: ne.c,
					currentUserId: pe.Cb,
					nightmode: pe.db,
					shouldUseShredditPlayer: (e, t) => {
						let {
							pageLayer: s,
							post: i
						} = t;
						return Object(se.a)(e, s, i)
					},
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(ae.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(ae.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: de.d,
					isNsfwBlurSubreddit: re.e,
					isOptionalTextExpEnabled: ie.a
				}),
				_e = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(j.y)(t, s)),
					openPost: t => e(Object(j.K)(t)),
					openPostLink: t => e(Object(j.ab)(Object(Q.b)(t.permalink), t.id))
				}),
				De = Object(m.b)(ke, _e),
				Re = Object(w.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Ae extends u.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && te.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === te.o.EMBED ? e.provider : null;
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
							isBackgrounded: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {
						this.stopContent(), this.iframe && this.setState(e => {
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
						return !!e && te.d.has(e.type)
					}, this.shouldFocusContentDebouncer = a()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && te.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === te.o.EMBED ? t.provider : null;
								i && !te.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? te.g.Pause : te.g.Play;
							e.contentWindow.postMessage({
								context: Ie,
								method: s
							}, P.a), e.contentWindow.postMessage({
								context: Ie,
								method: te.g.Mute
							}, P.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === te.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: te.A.Pause
						}), P.a) : e.contentWindow.postMessage({
							context: Ie,
							method: te.g.Pause
						}, P.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === te.o.EMBED ? e.provider : null;
						if (this.iframe && s && !te.s.has(s)) {
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
					}, this.handlePostMediaClick = e => {
						(this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && (e.preventDefault(), this.props.openPostLink(this.props.post))
					}, this.state = {
						canLoadContent: e.shouldLoad || !1,
						isBackgrounded: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: te.e,
						viewportWidth: te.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Me(this.props.post) && (this.visibilityChangeSubscriptionId = C.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Ne(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && C.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Ne(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						canUseOCRAltText: e,
						OCRAltText: t,
						post: s,
						subredditOrProfileDisplayText: i,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let r = "";
					return i && (r += i), t && e ? r += `${Oe}${t}` : s.title && (r += `${Oe}${s.title}`), r.length > ye ? Object(S.a)(r, ye, E.nb) : r
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(te.j, this.state.viewportHeight),
						s = Math.min(we, 16 * t / 9);
					s === we && (t = 9 * we / 16), e = this.state.viewportWidth >= J.c ? this.state.viewportWidth < K.k ? this.state.viewportWidth - Se - 2 * Ce : this.state.viewportWidth - Se - K.e - 2 * Ce : this.state.viewportWidth - 2 * Ce;
					const i = this.state.viewportHeight - 2 * Ce;
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
					let s = te.j,
						i = te.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = te.t, i = te.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
						s = arguments.length > 2 ? arguments[2] : void 0,
						i = arguments.length > 3 ? arguments[3] : void 0;
					const {
						availableWidth: n,
						isListing: r,
						post: o
					} = e;
					if (Object(te.H)(o.media)) return {
						source: o.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * Ce,
						height: this.state.viewportHeight - 2 * Ce
					};
					const a = o.media && o.media.obfuscated || "";
					let d = !o.media || Object(te.N)(o.media) || Object(te.G)(o.media) || Object(te.E)(o.media) ? "" : o.media.content,
						[l, c] = !o.media || Object(te.K)(o.media) || Object(te.M)(o.media) || Object(te.E)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (n && o.media && Object(te.E)(o.media)) {
						l = Object(q.b)(o.media.mediaMetadata || {}, Object(q.c)(r), te.p, n) + te.i, c = n
					}
					if (n && o.media && (o.media.type === te.o.IMAGE || o.media.type === te.o.GIFVIDEO)) {
						const e = he.b(n, o.media.resolutions);
						e && (d = e.url, c = e.width, l = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === te.o.IMAGE || o.media.type === te.o.GIFVIDEO)) {
						let e;
						(e = Object(te.L)(o.media.height, o.media.width) && Object(D.b)(o.media.height) ? he.c(o.media.height, o.media.width, o.media.resolutions) : he.a(o.media.resolutions)) && (d = e.url, c = e.width, l = e.height)
					}
					if (e.isExpando)
						if (c > t.viewportWidth) {
							l *= t.viewportWidth / c, c = t.viewportWidth
						} else if (l > t.viewportHeight) {
						const e = t.viewportHeight / l;
						l = t.viewportHeight, c *= e
					}
					const {
						maxVideoHeight: u,
						maxVideoWidth: m
					} = this.getVideoMaxDimensions(e, t);
					if (o.media && o.media.type === te.o.VIDEO) {
						const t = l / c;
						e.isExpando ? (l = u, c = m) : t > te.c ? (l = u, c = Math.min(Math.max(u / t, te.r), m)) : (l = Math.min(Math.max(m * t, te.q), u), c = m)
					}
					o.media && o.media.type === te.o.EMBED && (o.isSurveyAd && (d = Object(x.a)(s, o.impressionId, o.postId, i), l = 475, c = 475), e.isExpando && o.media.provider !== te.v.Twitter && (l = u, c = m));
					let p = !1;
					if (e.isMiniCard) {
						const e = l / c;
						p = Math.abs(e - te.c) > .01
					}
					return {
						source: d,
						obfuscated: a,
						width: c,
						height: l,
						needsBackgroundBlur: p
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNsfwBlurSubreddit: s,
						isNSFW: i,
						isOverlay: n,
						isSpoiler: r,
						theme: o
					} = this.props;
					if (e || t || this.state.isRevealed || n) return !1;
					const a = s && i;
					return i && !o.subredditContext.shouldShowNSFWContent || r || a
				}
				render() {
					var e, t;
					const {
						autoplayPref: s,
						className: i,
						crosspost: n,
						currentUserId: r,
						fireAdPixelsOfType: o,
						flairStyleTemplate: a,
						forceAspectRatio: d,
						isCommentsPage: c,
						isExpando: m,
						isGalleryTileLayout: p,
						isListing: b,
						isMediumHeight: g,
						isNotCardView: x,
						isNsfwBlurSubreddit: f,
						isNSFW: E,
						isOptionalTextExpEnabled: v,
						isSpoiler: w,
						isTitleOnly: C,
						nightmode: S,
						openPost: j,
						post: L,
						showCentered: P,
						showFull: K = !1,
						showPromotedCTA: J,
						shouldUseShredditPlayer: Y,
						subredditOrProfileDisplayText: Q
					} = this.props, {
						canLoadContent: se,
						isBackgrounded: ie,
						shouldPause: ne,
						shouldStop: re,
						viewportWidth: oe
					} = this.state, ae = f && E;
					if (!L.media) return null;
					let de;
					L.media.type !== te.o.TEXT && (de = L.media.richtextContent);
					const le = v && de,
						ce = ie || ne,
						ue = re,
						{
							source: pe,
							obfuscated: he,
							height: ge,
							width: ye,
							needsBackgroundBlur: Oe
						} = this.getMediaInfo(this.props, this.state, r, S),
						we = {
							showCentered: P,
							isListing: b,
							showFull: K,
							height: ge,
							width: ye
						},
						Ie = {
							...we,
							className: i,
							forceAspectRatio: d,
							viewportWidth: oe
						},
						Se = this.shouldBlur(),
						Te = !((null === (e = L.pollData) || void 0 === e ? void 0 : e.isPrediction) && !c),
						Me = !(!L.isSponsored || !L.source),
						Le = Object(me.ub)() || "",
						Ne = L.isSponsored ? Object(U.b)(L.id, {
							fireAdPixelsOfType: o,
							openPost: j
						}) : l.a,
						Pe = e => {
							Ne && Ne(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (he && Se) return u.a.createElement(R.a, fe({}, Ie, {
						blurSrc: he
					}), u.a.createElement(je, {
						isVisible: se
					}, u.a.createElement(D.a, fe({}, we, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: b,
						isNSFW: E,
						isNsfwBlockingModalEligible: ae,
						isSpoiler: w,
						isVideoThumbnail: !!L.media && L.media.type === te.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: L.id,
						shouldBlur: Se,
						source: he,
						outboundUrl: Me && L.source.outboundUrl || void 0,
						originalSource: pe,
						onPostMediaClick: this.handlePostMediaClick,
						fireAdPixelsOfType: this.props.fireAdPixelsOfType
					}))));
					if (!L.media) return null;
					switch (L.media.type) {
						case te.o.RTJSON:
							const e = Object(z.a)(L, null);
							if (null === e) return null;
							if (!K && !Object($.a)(L, null === (t = this.props.theme) || void 0 === t ? void 0 : t.subredditContext)) return null;
							const r = L.isMeta ? Object(ee.a)(e, L.id) : e;
							return u.a.createElement(u.a.Fragment, null, Te && u.a.createElement(B.a, {
								canLoadContent: se,
								className: i,
								"data-click-id": "text",
								"data-adclicklocation": h.a.MEDIA,
								isCommentsPage: c,
								isExpando: m,
								isMediumHeight: g,
								isRichTextTruncated: L.media.isRichtextPreview,
								isTitleOnly: C,
								postId: L.id,
								showFull: K
							}, u.a.createElement(G.b, {
								altText: this.getAltText(),
								content: r,
								flairStyleTemplate: a,
								isListing: b,
								isNSFW: E,
								isNsfwBlockingModalEligible: ae,
								isSpoiler: w,
								mediaMetadata: L.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: L.id,
								rtJsonElementProps: Re(this.props),
								renderMediaAsLinks: b,
								shouldBlur: Se
							}), u.a.createElement(M.b, {
								content: r
							})), u.a.createElement(A.a, {
								postId: L.id,
								isCommentsPage: !!c
							}));
						case te.o.TEXT:
							if (Object(X.a)(L)) {
								const e = "Text post should not include body content";
								return I.c.withScope(t => {
									t.setExtra("info", {
										post: L,
										isListing: b,
										isCommentsPage: c
									}), I.c.captureMessage(e)
								}), Object(y.a)() && console.log(`${L.id}: ${e}`), u.a.createElement(u.a.Fragment, null, Te && u.a.createElement(B.a, {
									postId: L.id,
									className: i,
									"data-click-id": "text",
									"data-adclicklocation": h.a.MEDIA,
									isCommentsPage: c,
									showFull: K
								}, u.a.createElement(F.a, {
									flairStyleTemplate: a,
									html: L.isMeta ? Object(Z.a)(L.media.content, L.id, xe.a.hiddenLink) : L.media.content
								})), u.a.createElement(A.a, {
									postId: L.id,
									isCommentsPage: !!c
								}))
							}
							return u.a.createElement(A.a, {
								postId: L.id,
								isCommentsPage: !!c
							});
						case te.o.EMBED:
							return this.props.isMiniCard && L.preview && L.preview.url ? u.a.createElement(R.a, fe({}, Ie, {
								alwaysWrapMedia: !0
							}), u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, fe({}, we, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: b,
								isNSFW: E,
								isCrosspost: !!n,
								isSpoiler: w,
								postId: L.id,
								shouldBlur: Se,
								source: L.preview.url,
								originalSource: L.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(H.a, null)))) : te.h.has(L.media.provider) ? L.media.provider === te.v.Twitter ? u.a.createElement(u.a.Fragment, null, u.a.createElement(V.a, {
								canLoadContent: se,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: Ie,
								onIframeLoaded: this.onIframeLoaded,
								source: pe,
								title: L.title,
								postId: L.id
							}), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							})) : u.a.createElement(u.a.Fragment, null, u.a.createElement(R.a, fe({}, Ie, {
								alwaysWrapMedia: !0,
								height: m ? ge : te.j,
								width: m ? ye : te.j * (16 / 9)
							}), se && u.a.createElement(k.a, {
								childRef: this.storeChildRef,
								height: m ? ge : te.j,
								width: m ? ye : void 0,
								isListing: b,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: P,
								showFull: K,
								source: pe,
								title: L.title
							})), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							})) : u.a.createElement(u.a.Fragment, null, u.a.createElement(R.a, fe({}, Ie, {
								alwaysWrapMedia: !0
							}), se && u.a.createElement(k.a, fe({}, we, {
								isResponsive: m || L.media.provider === te.v.IFrameEmbed,
								title: L.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: pe,
								fullWidth: L.media.provider === te.v.IFrameEmbed
							}))), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							}));
						case te.o.GIFVIDEO: {
							let e = ge,
								t = ye;
							return e > te.j && (t = ye / ge * (e = te.j)), u.a.createElement(R.a, fe({}, Ie, {
								blurSrc: Oe ? L.media.gifBackgroundImage : void 0
							}), u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(W.a, fe({}, we, {
								isNotCardView: x,
								height: m ? void 0 : e,
								width: m ? void 0 : t,
								postId: L.id,
								shouldLoad: !0,
								shouldPause: b && ce,
								source: pe,
								originalSource: L.media.content,
								isPromoted: L.isSponsored
							})), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							})))
						}
						case te.o.VIDEO: {
							const e = L.media.posterUrl || L.preview && L.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(u.a.Fragment, null, u.a.createElement(R.a, fe({}, Ie, {
								alwaysWrapMedia: !0
							}), u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, fe({}, we, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: b,
								isNSFW: E,
								isCrosspost: !!n,
								isSpoiler: w,
								postId: L.id,
								shouldBlur: Se,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(H.a, null)))), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							}));
							const t = L.reactedFrom && L.attributionInfo ? {
									id: L.id,
									reactedFrom: {
										...L.reactedFrom
									},
									attributionInfo: {
										...L.attributionInfo
									},
									isReactAllowed: L.isReactAllowed
								} : void 0,
								i = Y ? u.a.createElement(be.a, {
									autoplay: s,
									postId: L.id,
									hlsSource: L.media.hlsUrl,
									posterUrl: L.media.posterUrl,
									scrubberThumbSource: L.media.scrubberThumbSource
								}) : u.a.createElement(ve, {
									key: L.id,
									autoPlay: s && !1 === ne,
									isExpando: m,
									shouldLoad: !0,
									shouldPause: ce,
									shouldStop: ue,
									isBackgrounded: ie,
									hlsSource: L.media.hlsUrl,
									mpegDashSource: L.media.dashUrl,
									isGif: L.media.isGif,
									scrubberThumbSource: L.media.scrubberThumbSource,
									postId: L.id,
									isSponsored: L.isSponsored,
									onAdPostClick: Pe,
									callToActionSource: L.source || void 0,
									callToActionText: L.callToAction,
									isListing: b,
									posterUrl: L.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: L.id,
									muxVideoIsLive: !1,
									muxVideoTitle: L.title,
									sessionId: Le,
									reactPostInfo: t,
									isCommentsPage: c
								}),
								r = u.a.createElement(R.a, fe({}, Ie, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), se ? i : null);
							return L.isSponsored ? u.a.createElement(T.a, {
								post: L,
								trackVideo: !0
							}, r) : u.a.createElement(u.a.Fragment, null, r, le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							}))
						}
						case te.o.LIVEVIDEO:
							return u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(Ee, {
								className: this.props.isMiniCard ? xe.a.miniCardVideo : void 0,
								canLoad: se,
								postId: L.id,
								postTitle: L.title,
								shouldPause: ce || ue,
								url: L.media.hlsUrl
							}));
						case te.o.IMAGE:
							const o = this.state.viewportHeight - 2 * Ce,
								d = this.state.viewportWidth - 2 * Ce;
							let l = pe;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (L.thumbnail && Object(O.a)(L.thumbnail.url) ? l = L.thumbnail.url : L.preview && Object(O.a)(L.preview.url) && (l = L.preview.url)), u.a.createElement(u.a.Fragment, null, u.a.createElement(R.a, fe({}, Ie, {
								blurSrc: Oe ? l : void 0,
								isExpando: !!m
							}), u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(D.a, fe({}, we, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: b,
								isNSFW: E,
								isCrosspost: !!n,
								isSpoiler: w,
								maxHeight: m ? o : void 0,
								maxWidth: m ? d : void 0,
								postId: L.id,
								shouldBlur: Se,
								source: l,
								outboundUrl: Me && L.source.outboundUrl || void 0,
								isSponsored: L.isSponsored,
								originalSource: L.media.content,
								onPostMediaClick: this.handlePostMediaClick,
								fireAdPixelsOfType: this.props.fireAdPixelsOfType
							})))), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							}));
						case te.o.GALLERY:
							const f = Object(q.b)(L.media.mediaMetadata || {}, Object(q.c)(b), te.p, ye),
								v = Object(q.a)(L.media.gallery, L.isSponsored);
							return u.a.createElement(R.a, fe({}, Ie, {
								blurSrc: Oe ? pe : void 0,
								isExpando: !!m,
								maxGalleryHeight: f + v,
								className: xe.a.galleryMediaContainer,
								isGalleryTileLayout: p
							}), u.a.createElement(je, {
								isVisible: se
							}, u.a.createElement(_.a, {
								post: L,
								postId: L.id,
								postTitle: L.title,
								subredditName: Q,
								galleryItems: L.media.gallery ? L.media.gallery.items : [],
								mediaMetadata: L.media.mediaMetadata || {},
								imageHeight: f,
								captionHeight: v,
								isSponsored: L.isSponsored,
								showPromotedCTA: !!J,
								className: this.props.imageBoxClassName,
								isListing: b,
								isNSFW: E,
								isNsfwBlockingModalEligible: ae,
								isSpoiler: w,
								shouldBlur: Se,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!p,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: se
							}), le && u.a.createElement(N.a, {
								content: de,
								rtJsonElementProps: Re(this.props)
							})));
						default:
							return null
					}
				}
			}
			const Be = Pe(De(Object(b.a)(Object(v.a)(Ae))))
		},
		"./src/reddit/components/Poll/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Poll",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Poll").then(s.bind(null, "./src/reddit/components/Poll/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Poll/index.tsx"
				}
			})
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
			t.a = Object(r.a)(e => {
				let {
					flairStyleTemplate: t,
					...s
				} = e;
				return n.a.createElement(d.a, l({
					style: {
						color: Object(a.a)(Object(o.a)({
							flairStyleTemplate: t,
							...s
						}))
					}
				}, s))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = (e, t) => !(!Object(i.a)(e) && !e.pollData) && (!e.isSpoiler && !(e.isNSFW && (null == t || !t.shouldShowNSFWContent)))
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "h", (function() {
				return a
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = s.n(i),
				r = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}

			function a(e) {
				const t = u(e),
					s = t.every(e => e.y > e.x),
					i = t.every(e => e.x > e.y);
				return !s && !i
			}

			function d(e, t, s) {
				const i = u(e);
				if (h(i, t)) return !0;
				const n = m(i).y;
				return !n || n < s
			}
			const l = e => e ? r.j : r.e;

			function c(e, t, s, i) {
				const n = u(e);
				if (h(n, t)) return t;
				const r = m(n);
				let o = r.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / r.x), o > t ? t : o)
			}
			const u = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				m = e => e.reduce((e, t) => p(e, t), e && e[0] || []),
				p = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				h = (e, t) => e.some(e => e.y > t && Object(r.L)(e.y, e.x));

			function b(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? r.i : 0
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
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(n.H)(t.richtextContent))
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
						for (const r of t)
							if ("link" === r.e && r.u && r.u.includes(`https://www.reddit.com/poll/${s}`)) i = !0;
							else if (r.c && "string" != typeof r.c) {
							const t = e(r.c, s);
							t.found ? (i = !0, ("par" !== r.e || t.updated.length) && n.push({
								...r,
								c: t.updated
							})) : n.push(r)
						} else n.push(r)
					} catch (r) {
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
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t, s) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(i.c)(t)}`, `class="${s}" href="https://www.reddit.com/poll/${Object(i.c)(t)}`)
			}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var i = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: o.s(e, t, s),
					post: o.K(e, t),
					...o.o(e)
				}),
				d = (e, t) => s => ({
					...a(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.C(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(r.d)(s, e) + 1;
					return {
						...a(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.C(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				c = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...a(n, e, s),
					action: i.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
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
		"./src/reddit/selectors/experiments/d2xShredditPlayer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = [i.Sb.INDEX, i.Sb.COMMENTS, i.Sb.SUBREDDIT],
				a = (e, t, s) => {
					var i;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Nc
					}) === n.Rd && !s.isSponsored && o.includes(null === (i = null == t ? void 0 : t.meta) || void 0 === i ? void 0 : i.name)
				}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/helpers/isCrosspost.ts"),
				o = s("./src/reddit/selectors/modQueue.ts"),
				a = s("./src/reddit/selectors/platform.ts");
			const d = (e, t) => {
				let {
					post: s
				} = t;
				if (Object(o.c)(e)) return !0;
				const d = Object(a.f)(e),
					l = Object(r.a)(s);
				return !(!d || l) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: i.Vb
					}) === i.Rd
				})(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.39306c77b3f3acc0413d.js.map