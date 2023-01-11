// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.dd15e1412cc601047e22.js
// Retrieved at 1/11/2023, 11:10:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const a = p(n.target, n.currentTarget),
						r = m(n.target, n.currentTarget);
					a && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, a, r)) : s(s => {
						const i = t(e, a, r)(s);
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

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: a,
						clickTrackingId: o,
						...d
					} = t, c = Object(i.useCallback)(l(o, a, s), [o, a, s]);
					return n.a.createElement(e, r({}, d, {
						afterClickTracking: c
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(a.c)(t)
			}
			const c = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				p = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
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
				a = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				o = s.n(a),
				r = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return n.a.createElement("div", {
					className: o.a.optionalText
				}, n.a.createElement(r.a, {
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
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
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
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return rs
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				a = s("./node_modules/lodash/noop.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				l = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				p = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				m = s("./src/lib/cache/localStorage/index.ts"),
				h = s("./src/lib/combineRefs/index.tsx"),
				g = s("./src/lib/loadWithRetries/index.ts"),
				b = () => Object(g.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				f = s("./src/reddit/constants/experiments.ts"),
				E = s("./src/reddit/helpers/chooseVariant/index.ts");
			const v = Object(c.a)(e => {
				const t = Object(E.c)(e, {
					experimentEligibilitySelector: E.a,
					experimentName: f.ve
				});
				return Object(f.fg)(t) ? void 0 : t
			}, e => {
				const t = Object(E.c)(e, {
					experimentEligibilitySelector: E.a,
					experimentName: f.we
				});
				return Object(f.fg)(t) ? void 0 : t
			}, (e, t) => e === f.xe.Enabled && t === f.xe.Enabled);
			var x = s("./src/config.ts");
			var y = s("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var C;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(C || (C = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(I).join("")
			})(C.SHA1, e);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const j = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				N = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: x.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${x.a.buildNumber} ${x.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			var L = function(e, t) {
					const {
						anonymousUserId: s,
						debug: i,
						disableCookies: n,
						envKey: a,
						localStorageSaltKey: o,
						localStorageViewerUserIdKey: u,
						playerName: p,
						playerVersion: g,
						respectDoNotTrack: f,
						saltLength: E,
						saltTimeToLive: I,
						viewerUserIdLength: C
					} = {
						...N,
						...t
					};
					class L extends r.Component {
						constructor(e) {
							super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
							return e ? Object(h.a)(this.videoRef, e) : this.videoRef
						}
						render() {
							const {
								forwardedRef: t,
								...s
							} = this.props, i = s;
							return l.a.createElement(e, T({}, i, {
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
								} = this, t = await b();
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
								} = this, t = await b();
								e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
							} catch (s) {
								console.error(s)
							}
						}
						async doMuxThings() {
							if (this.props.isMuxEnabled) try {
								const e = await b();
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
								s = `${w()}${e}${t}`;
							return (await S(s)).substr(0, L.VIEWER_USER_ID_LENGTH)
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
							let t = Object(m.a)(e);
							return t || (t = O(L.SALT_LENGTH), Object(m.b)(e, t, L.SALT_TIME_TO_LIVE)), t
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
								player_software_version: this.getDashInstanceData() ? x.a.dashVersion : this.getHlsInstanceData() ? x.a.hlsVersion : null
							}
						}
					}
					L.displayName = j(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = i, L.DISABLE_COOKIES = n, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = a, L.LOCAL_STORAGE_SALT_KEY = o, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = u, L.PLAYER_NAME = p, L.PLAYER_VERSION = g, L.RESPECT_DO_NOT_TRACK = f, L.SALT_LENGTH = E, L.SALT_TIME_TO_LIVE = I, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = C;
					const P = Object(r.forwardRef)((e, t) => l.a.createElement(L, T({}, e, {
							forwardedRef: t
						}))),
						k = Object(c.c)({
							redditUserId: y.k,
							isMuxEnabled: v
						});
					return Object(d.b)(k, null, null, {
						forwardRef: !0
					})(P)
				},
				P = s("./src/lib/ads/utils.ts"),
				k = s("./src/lib/classNames/index.ts"),
				M = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				D = s("./src/lib/env/index.ts"),
				A = s("./src/lib/isUrl/index.ts"),
				R = s("./src/lib/objectSelector/index.ts"),
				B = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				V = s("./src/lib/sentry/index.ts"),
				W = s("./src/lib/truncateText/index.ts"),
				H = s("./src/reddit/actions/post.ts"),
				U = s("./src/reddit/components/AdViewability/index.tsx"),
				F = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				G = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				K = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx");
			const J = "https://www.redditmedia.com";
			var Y = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				$ = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				z = s("./src/lib/hooks/usePrevious.ts"),
				q = s("./src/reddit/helpers/trackers/gallery.ts");
			var Q = (e, t, s) => {
					const i = Object(r.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(r.useEffect)(() => {
						if (t) return t.addEventListener("keydown", i), () => {
							t && t.removeEventListener("keydown", i)
						}
					}, [t, i])
				},
				X = s("./src/reddit/hooks/useTracking.ts"),
				Z = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				ee = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				te = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				se = s("./src/reddit/actions/media.ts"),
				ie = s("./src/reddit/components/Media/BlurredContent.tsx"),
				ne = s("./src/reddit/constants/adEvents.ts"),
				ae = s("./src/reddit/constants/keycodes.ts"),
				oe = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				re = s.n(oe),
				le = s("./src/reddit/models/Media/index.ts");

			function de(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}
			const ce = e => e ? le.j : le.d;

			function ue(e, t, s, i) {
				const n = pe(e);
				if (ge(n, t)) return t;
				const a = me(n);
				let o = a.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / a.x), o > t ? t : o)
			}
			const pe = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				me = e => e.reduce((e, t) => he(e, t), e && e[0] || []),
				he = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				ge = (e, t) => e.some(e => e.y > t && Object(le.M)(e.y, e.x));
			var be = s("./src/reddit/selectors/media.ts"),
				fe = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				Ee = s.n(fe);
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), xe = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: n,
					imgAltText: a
				} = e, o = "u" in t ? t.u : t.gif;
				return l.a.createElement("div", {
					className: Object(k.a)({
						[Ee.a.slideImageMainDiv]: !i
					})
				}, n && l.a.createElement("img", {
					src: o,
					alt: a,
					className: Ee.a.slideImage,
					style: s
				}), i && l.a.createElement("div", {
					className: Ee.a.seeMore
				}, ve._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, ye = (e, t, s) => {
				const i = pe(e),
					n = me(i),
					a = n.x / n.y < 1,
					o = function(e) {
						const t = pe(e),
							s = t.every(e => e.y > e.x),
							i = t.every(e => e.x > e.y);
						return !s && !i
					}(e),
					r = function(e, t, s) {
						const i = pe(e);
						if (ge(i, t)) return !0;
						const n = me(i).y;
						return !n || n < s
					}(e || {}, ce(s), le.p);
				return s || r || o || a ? {
					height: t
				} : {
					paddingBottom: `${Object(le.C)(n.y,n.x)}%`
				}
			}, Oe = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: n,
					originalImage: a,
					imgAltText: o,
					isListing: r,
					isNSFW: d,
					isNsfwBlockingModalEligible: c,
					isSpoiler: u,
					isSponsored: p,
					isReadyToShow: m,
					shouldBlur: h
				} = e, g = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, b = ce(r), f = a.y > b && Object(le.M)(a.y, a.x), E = f ? {} : {
					maxHeight: "100%"
				};
				let v;
				return v = i || (f ? a : "gif" in a ? a : n), l.a.createElement("li", {
					style: g,
					className: Ee.a.slide
				}, l.a.createElement("figure", {
					className: Object(k.a)({
						[Ee.a.tallImage]: f,
						[Ee.a.commonImage]: !f
					}, Ee.a.figure)
				}, r || p ? l.a.createElement(xe, {
					displayImage: v,
					style: E,
					showSeeMore: f,
					isReadyToShow: m,
					imgAltText: o
				}) : l.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(k.a)({
						[Ee.a.tallImage]: f,
						[Ee.a.commonImage]: !f
					}, Ee.a.imageLink)
				}, l.a.createElement(xe, {
					displayImage: v,
					style: E,
					showSeeMore: f,
					isReadyToShow: m,
					imgAltText: o
				}), h && !c && l.a.createElement(ie.a, {
					isNSFW: !!d,
					isSpoiler: !!u
				}))))
			}, we = e => l.a.createElement("a", {
				className: Object(k.a)(e.className, Ee.a.navigationUnderlay, {
					[Ee.a.hasMoreSlides]: e.hasMoreSlides
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
			}, e.hasMoreSlides && l.a.createElement("i", {
				className: Object(k.a)(e.iconClassName, Ee.a.icon)
			}, l.a.createElement(Z.a, {
				className: Ee.a.iconImage
			}))), Ie = e => l.a.createElement("div", {
				className: Ee.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && l.a.createElement("span", {
				className: Ee.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && l.a.createElement("span", {
				className: Ee.a.imageUrl
			}, l.a.createElement("a", {
				className: Ee.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, l.a.createElement("span", {
				className: Ee.a.urlText
			}, (e => {
				const t = re.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			})(e.outboundUrl)), l.a.createElement(ee.a, {
				className: Ee.a.linkIcon
			})))), Ce = e => l.a.createElement("div", {
				className: Ee.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && l.a.createElement(te.a, {
				className: Ee.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), Se = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, Te = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			var je = e => {
					const t = Object(d.d)(),
						{
							captionHeight: s,
							galleryItems: i,
							imageHeight: n,
							isListing: a,
							isSponsored: o,
							isTileLayout: c,
							mediaMetadata: p = {},
							post: m,
							postId: h,
							postTitle: g,
							shouldShowTileLayoutOption: b,
							showPromotedCTA: f,
							subredditName: E,
							isVisible: v
						} = e,
						x = Object(d.e)(e => Object(be.d)(e, h)),
						y = x > 0,
						O = x < i.length - 1,
						w = Object(X.a)(),
						I = Object(r.useRef)(null),
						C = Object(r.useRef)(null),
						[S, T] = Object(r.useState)(v ? x : -1),
						[j, N] = Object(r.useState)(v ? x : -1),
						L = Object(z.a)(v),
						P = Object(z.a)(x);
					Object(r.useEffect)(() => {
						(void 0 !== L && L !== v && v && S < 0 && j < 0 || void 0 !== P && P !== x && v && (S > x || j < x)) && (T(Se(x, 1)), N(Te(x, i.length, 1)))
					}, [L, x, v, S, j, P, i.length, h]);
					const _ = Object(r.useRef)(),
						D = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								t ? (S < 0 || j - S == 0) && (_.current = setTimeout(() => {
									const e = Te(j, i.length);
									e !== j && N(e)
								}, 1e3)) : (S < 0 || j - S == 0) && clearTimeout(_.current)
							})
						}, [S, j, i.length]);
					Object($.a)(C, D);
					const A = Object(r.useCallback)(e => {
							t(Object(se.f)({
								postId: h,
								index: e
							}))
						}, [t, h]),
						R = Object(r.useCallback)(e => {
							t(Object(H.y)(m, ne.a.GalleryItemImpression, `Slide${e}`))
						}, [t, m]),
						B = Object(r.useCallback)(() => {
							t(Object(se.i)({
								postId: h,
								isTileLayout: !c
							}))
						}, [t, h, c]),
						V = Object(r.useCallback)(() => {
							if (!O) return;
							const e = x + 1;
							if (e + 1 >= j) {
								const e = Te(j, i.length);
								e !== j && N(e)
							}
							A(e), w(q.b(h, e)), w(q.d(h, e + 1)), R(e)
						}, [O, x, R, A, w, h, j, i.length]),
						U = Object(r.useCallback)(() => {
							if (!y) return;
							const e = x - 1;
							if (e - 1 <= S) {
								const e = Se(S);
								e !== S && T(e)
							}
							const t = x + 1;
							A(e), w(q.a(h, t)), w(q.d(h, t - 1)), R(e)
						}, [y, x, R, A, w, h, S]),
						F = Object(r.useCallback)(() => {
							const e = i[x] && i[x].outboundUrl;
							e && w(q.c(h, e))
						}, [w, h, x, i]);
					Q(ae.a.ArrowLeft, I.current, U), Q(ae.a.ArrowRight, I.current, V);
					const G = i[x] && i[x].caption,
						K = i[x] && i[x].outboundUrl,
						J = ye(p, n, a);
					return l.a.createElement("div", {
						"data-adclicklocation": u.a.MEDIA,
						className: Object(k.a)(Ee.a.outerContainer),
						ref: I,
						tabIndex: 0
					}, c ? l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(k.a)(Ee.a.tilesWrapper, {
							[Ee.a.blurredContent]: e.shouldBlur
						}),
						onClick: e.onClickRevealBlurred
					}, i.map((t, s) => {
						const i = t.mediaId,
							n = p && p[i];
						if (!n || !n.s) return null;
						const a = [...n && n.s ? [n.s] : [], ...n && n.p ? n.p : []],
							o = de(le.z, a);
						if (!o) return null;
						const r = n.s;
						return l.a.createElement("div", {
							style: {
								backgroundImage: `url(${"gif"in r?r.gif:"u"in o&&o.u})`
							},
							className: Ee.a.tileImage,
							onClick: e.shouldBlur ? void 0 : e => {
								e.preventDefault(), e.stopPropagation(), B(), A(s)
							},
							key: i
						})
					}), [1, 2, 3].map(e => l.a.createElement("div", {
						key: e,
						className: Ee.a.tilePlaceholder
					}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && l.a.createElement(ie.a, {
						isNSFW: !!e.isNSFW,
						isSpoiler: !!e.isSpoiler
					})) : l.a.createElement("div", {
						className: Ee.a.slideshowContainer,
						tabIndex: -1,
						ref: C,
						onClick: e.onClickRevealBlurred,
						style: J
					}, l.a.createElement("div", {
						className: Ee.a.imagesWrapper
					}, l.a.createElement("ul", {
						className: Ee.a.slideWrapper
					}, i.map((t, s) => {
						const i = t.mediaId,
							a = p && p[i];
						if (!a || !a.s) return null;
						const r = t.caption ? t.caption : g,
							d = Object(W.a)(E ? `${E} - ${r}` : r, 300, M.nb),
							c = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
							u = de(n, c);
						if (!u) return null;
						const m = e.shouldBlur && de(n, a.o || []) || void 0,
							h = s >= S && s <= j;
						return l.a.createElement(Oe, {
							slideIndex: s,
							currentIndex: x,
							obfuscatedImage: m,
							optimalImage: u,
							originalImage: a.s,
							isListing: e.isListing,
							isSponsored: o,
							key: i,
							isReadyToShow: h,
							imgAltText: d,
							shouldBlur: e.shouldBlur,
							isNSFW: e.isNSFW,
							isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
							isSpoiler: e.isSpoiler
						})
					})), !e.shouldBlur && l.a.createElement(l.a.Fragment, null, l.a.createElement(we, {
						onClick: U,
						setFocusTo: C,
						hasMoreSlides: y,
						title: ve._("Previous", null, {
							hk: "3dZcTi"
						}),
						iconClassName: Ee.a.prevIcon,
						className: Ee.a.prevButton
					}), l.a.createElement(we, {
						onClick: V,
						setFocusTo: C,
						hasMoreSlides: O,
						title: ve._("Next", null, {
							hk: "3Ajk1H"
						}),
						iconClassName: Ee.a.nextIcon,
						className: Ee.a.nextButton
					}))), i.length > 1 ? l.a.createElement(Ce, {
						currentSlide: x + 1,
						totalSlides: i.length,
						toggleTileLayout: b && B || void 0
					}) : ""), !G && !K || c || f ? !!s && !c && !f && l.a.createElement("div", {
						className: Ee.a.emptyCaptionBlock,
						style: {
							height: s
						}
					}) : l.a.createElement(Ie, {
						caption: G,
						onClickEvent: F,
						outboundUrl: K,
						captionHeight: s
					}))
				},
				Ne = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				Le = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				Pe = s("./src/reddit/models/Prediction/index.ts"),
				ke = s("./src/reddit/selectors/poll/index.ts"),
				Me = s("./src/reddit/components/Econ/Prediction/async.ts"),
				_e = s("./src/reddit/components/Poll/async.ts");
			const De = Object(c.c)({
				poll: ke.e
			});
			var Ae = Object(d.b)(De)(e => {
					let {
						isCommentsPage: t,
						poll: s,
						postId: i
					} = e;
					return s ? Object(Pe.c)(s) ? l.a.createElement(Me.a, {
						postId: i
					}) : l.a.createElement(_e.a, {
						postId: i,
						isCommentsPage: t
					}) : null
				}),
				Re = s("./src/reddit/constants/componentSizes.ts"),
				Be = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ve = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				We = s.n(Ve);
			class He extends l.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(Be.a)({
						isLoading: !0
					});
					return l.a.createElement("div", {
						className: We.a.placeholder
					}, [1, 2, 3].map(t => l.a.createElement("div", {
						key: t,
						className: We.a.placeholderParagraph
					}, l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}))))
				}
			}
			var Ue = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(H.x)(t))
			}))(He);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Ge = e => {
					let {
						canLoadContent: t,
						children: s,
						className: i,
						isCommentsPage: n,
						isMediumHeight: a,
						isRichTextTruncated: o,
						isExpando: r,
						isTitleOnly: d,
						postId: c,
						showFull: u,
						...p
					} = e;
					const m = {
							[We.a.richTextContainerFull]: u,
							[We.a.richTextContainerTitleOnly]: d && !u,
							[We.a.richTextContainer]: !u && !d
						},
						h = {};
					u || (h.maxHeight = d ? `${le.m}px` : a ? `${le.l}px` : `${le.k}px`), n && (h.maxWidth = `${Re.d}px`);
					const g = o && u;
					return l.a.createElement("div", Fe({
						className: Object(k.a)(m, i),
						style: h
					}, p), s, g && l.a.createElement(Ue, {
						canLoadContent: !!t,
						isExpando: r,
						postId: c
					}))
				},
				Ke = s("./node_modules/fbt/lib/FbtPublic.js"),
				Je = s("./src/lib/intersectionObserver/index.ts"),
				Ye = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				$e = s.n(Ye);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const qe = 550,
				Qe = 100,
				Xe = 300;

			function Ze(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: i,
					embedBoxChildRef: n,
					source: a,
					title: o,
					postId: c
				} = e, [u, p] = Object(r.useState)(!1), m = Object(z.a)(t), h = Object(r.useRef)(), {
					height: g,
					isDeleted: b
				} = Object(d.e)(e => e.mediaEmbed[c] || {}), f = u ? b ? Qe : g : Xe, E = s.isListing ? Math.min(f, le.j) : f;

				function v(e) {
					var t;
					u || (null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || p(!0)
				}
				return Object(r.useEffect)(() => (window.addEventListener("message", v), () => {
					h.current && Object(Je.b)(h.current), window.removeEventListener("message", v)
				}), []), Object(r.useEffect)(() => {
					!t && m && p(!1)
				}, [m, t]), l.a.createElement(Le.a, ze({}, s, {
					alwaysWrapMedia: !0,
					height: E + 8,
					showFull: !s.isListing,
					width: qe
				}), t && l.a.createElement("div", {
					className: $e.a.tweetContainer,
					style: {
						height: E
					}
				}, !u && l.a.createElement("div", {
					className: Object(k.a)(Object(Be.a)({
						isLoading: !0
					}), $e.a.tweetPlaceholder)
				}), u && b && l.a.createElement("p", {
					className: $e.a.tweetDeleted
				}, Ke.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), l.a.createElement(Y.a, {
					childRef: function(e) {
						h.current = e, e && Object(Je.a)(e, (t, s) => {
							e && e.contentWindow && !g && s && (p(!1), e.contentWindow.postMessage("twitter-measure-requested", J))
						}), n(e)
					},
					className: Object(k.a)($e.a.tweetEmbedBox, {
						[$e.a.isInvisible]: !u || b
					}),
					fullWidth: !0,
					height: E,
					isListing: s.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: s.isListing ? le.j : null,
					onLoad: i,
					showCentered: s.showCentered,
					showFull: !0,
					source: a,
					title: o
				}), s.isListing && f > le.j && l.a.createElement("div", {
					className: $e.a.seeMore
				}, Ke.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
			var et = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				tt = s("./src/reddit/components/PlayButton/index.tsx"),
				st = s("./src/reddit/components/PostList/index.tsx"),
				it = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				nt = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				at = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function ot() {
				return (ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var rt = Object(_.a)(e => {
					let {
						flairStyleTemplate: t,
						...s
					} = e;
					return l.a.createElement(at.a, ot({
						style: {
							color: Object(nt.a)(Object(it.a)({
								flairStyleTemplate: t,
								...s
							}))
						}
					}, s))
				}),
				lt = s("./src/reddit/components/RichTextJson/index.tsx"),
				dt = s("./src/reddit/constants/screenWidths.ts"),
				ct = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ut = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				pt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				mt = s("./src/reddit/helpers/path/index.ts"),
				ht = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				gt = s("./src/lib/redditId/index.ts");

			function bt(e, t, s) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(gt.c)(t)}`, `class="${s}" href="https://www.reddit.com/poll/${Object(gt.c)(t)}`)
			}

			function ft(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let n = [];
					try {
						for (const a of t)
							if ("link" === a.e && a.u && a.u.includes(`https://www.reddit.com/poll/${s}`)) i = !0;
							else if (a.c && "string" != typeof a.c) {
							const t = e(a.c, s);
							t.found ? (i = !0, ("par" !== a.e || t.updated.length) && n.push({
								...a,
								c: t.updated
							})) : n.push(a)
						} else n.push(a)
					} catch (a) {
						i = !1, n = []
					}
					return {
						found: i,
						updated: i ? n : t
					}
				}(e.document, Object(gt.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
			const Et = [M.Sb.INDEX, M.Sb.COMMENTS, M.Sb.SUBREDDIT];
			var vt = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				yt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ot = s("./src/reddit/selectors/experiments/postSeo.ts"),
				wt = s("./src/reddit/selectors/meta.ts"),
				It = s("./src/reddit/selectors/postCreations.ts"),
				Ct = s("./src/reddit/selectors/posts.ts"),
				St = s("./src/reddit/selectors/seo/index.ts"),
				Tt = s("./src/reddit/selectors/telemetry.ts");
			const jt = (e, t, s, i) => {
					const n = e / t,
						a = s / i;
					return Math.abs(n - a) < .03
				},
				Nt = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				Lt = (e, t, s) => {
					for (let i = 0; i < s.length; i++) {
						const n = s[i];
						if (n.width >= le.d / 2 && jt(e, t, n.height, n.width)) return n
					}
				},
				Pt = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= le.d || s.width >= le.e) return s
					}
				};
			var kt = s("./src/reddit/actions/preferences.ts"),
				Mt = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_t = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				Dt = s("./src/reddit/helpers/trackers/media.ts"),
				At = s("./src/reddit/selectors/platform.ts");

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Bt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Vt = Object(d.b)(() => Object(c.c)({
				autoplayPref: y.d
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					setAutoplayPref: t => e(kt.s(t))
				}
			});
			var Wt = Object(r.memo)(Vt(Object(Mt.b)(e => {
				const t = Object(r.useRef)(),
					i = Object(r.useRef)(),
					n = Object(X.a)(),
					[a, o] = Object(r.useState)("ready"),
					{
						autoplay: c,
						autoplayPref: u,
						hlsSource: p,
						isOverlay: m,
						pageLayer: h,
						postId: g,
						posterUrl: b,
						setAutoplayPref: f,
						scrubberThumbSource: E
					} = e || {},
					v = p || void 0,
					x = Object(d.e)(At.i),
					y = !m && x;
				Object(r.useEffect)(() => {
					"ready" === a && async function() {
						try {
							o("importing"), await Promise.all([s.e("vendors~shreddit-player").then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js")), s.e("vendors~shreddit-player").then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js"))]), o("done")
						} catch (e) {
							console.error("Error importing shreddit-player", e), o("error"), V.c.withScope(t => {
								t.setExtra("info", {
									postId: g
								}), V.c.captureException(e)
							})
						}
					}()
				}, [a, g]), Object(r.useEffect)(() => {
					if ("done" !== a) return;
					const e = e => {
							var t;
							e.stopPropagation();
							const {
								details: s
							} = (null == e ? void 0 : e.detail) || {};
							g && s && n(Object(Dt.b)(g, s.action, s.noun, s.media, null === (t = s.playback) || void 0 === t ? void 0 : t.id))
						},
						s = e => {
							var t, s;
							void 0 !== typeof(null === (t = e.detail) || void 0 === t ? void 0 : t.newValue) && f(null === (s = e.detail) || void 0 === s ? void 0 : s.newValue)
						},
						{
							current: i
						} = t;
					return null == i || i.addEventListener("track-event", e), null == i || i.addEventListener("change-autoplay-pref", s), () => {
						null == i || i.removeEventListener("track-event", e), null == i || i.removeEventListener("change-autoplay-pref", s)
					}
				}, [a, t, g, n, f]), Object(r.useEffect)(() => {
					var e;
					if ("done" !== a) return;
					const {
						current: t
					} = i;
					if (y && !(null === (e = null == t ? void 0 : t.hlsElement) || void 0 === e ? void 0 : e.hasAttribute("paused"))) try {
						null == t || t.pause()
					} catch (s) {}
				}, [a, y, i]);
				const O = {
						cursor: "default",
						height: "100%",
						width: "100%",
						maxHeight: "100%",
						maxWidth: "100%",
						backgroundColor: "black",
						color: "white"
					},
					w = {
						onClick: e => {
							e.stopPropagation()
						},
						style: O,
						"data-testid": "shreddit-player-wrapper"
					};
				return "ready" === a || "importing" === a ? l.a.createElement("div", Rt({}, w, {
					style: {
						backgroundColor: "black",
						height: "100%",
						width: "100%"
					}
				}), l.a.createElement("div", {
					className: "h-full w-full absolute flex items-center justify-center ease inset-0 text-white"
				}, l.a.createElement("svg", {
					"aria-hidden": "true",
					className: "w-3xl h-3xl animate-spin",
					fill: "none",
					viewBox: "0 0 120 120"
				}, l.a.createElement("circle", {
					className: "opacity-25",
					cx: "60",
					cy: "60",
					r: "54",
					stroke: "currentColor",
					strokeWidth: "8"
				}), l.a.createElement("circle", {
					className: "opacity-75",
					cx: "60",
					cy: "60",
					r: "54",
					stroke: "currentColor",
					strokeWidth: "10",
					strokeDasharray: 100,
					strokeDashoffset: 50,
					pathLength: "100"
				})))) : "error" === a ? l.a.createElement("div", Rt({}, w, {
					style: {
						...O,
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}
				}), Bt._("Sorry, something went wrong when loading this video.", null, {
					hk: "9N3Tr"
				})) : l.a.createElement("div", w, l.a.createElement("media-telemetry-observer", {
					ref: t
				}, l.a.createElement("shreddit-player", {
					ref: i,
					autoplay: c && !y || void 0,
					"autoplay-pref": u || void 0,
					"play-out-of-viewport": Object(_t.z)(h) || void 0,
					poster: b,
					preview: E || void 0,
					"show-autoplay-toggle": !0,
					src: v,
					ui: "desktop"
				}, l.a.createElement("source", {
					src: v,
					type: "application/vnd.apple.mpegURL"
				}))))
			})), (function(e, t) {
				const s = null == e ? void 0 : e.hlsSource,
					i = null == t ? void 0 : t.hlsSource;
				if (s && i && s.split("?")[0] !== i.split("?")[0]) return !1;
				for (const n of Object.keys(t).filter(e => "hlsSource" !== e))
					if (e[n] !== t[n]) return !1;
				return !0
			}));
			var Ht = s("./src/reddit/components/Media/index.m.less"),
				Ut = s.n(Ht);

			function Ft() {
				return (Ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Gt = L(G.b, {
					playerName: "Reddit Player"
				}),
				Kt = 300,
				Jt = " - ",
				Yt = 1200,
				$t = 75,
				zt = "player.js",
				qt = Re.q + Re.p,
				Qt = e => l.a.createElement("div", {
					className: Object(k.a)(Ut.a.visibilityWrapper, {
						[Ut.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Xt = new Set([le.o.EMBED, le.o.VIDEO, le.o.GIFVIDEO]),
				Zt = e => !!e.media && Xt.has(e.media.type),
				es = new Set([le.o.EMBED, le.o.GALLERY, le.o.GIFVIDEO, le.o.IMAGE, le.o.VIDEO]),
				ts = e => {
					let {
						post: t
					} = e;
					return !!t.media && es.has(t.media.type)
				},
				ss = Object(ct.v)(),
				is = Object(c.c)({
					canUseOCRAltText: (e, t) => Object(Ot.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ot.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(Ot.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ct.V)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(It.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(St.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const a = Object(be.e)(e, i.id);
						return !(void 0 !== a || !n) || !!a
					},
					pageType: e => Object(Tt.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ct.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: xt.b,
					isBlockingInterstitialV2Enabled: xt.c,
					currentUserId: y.Eb,
					nightmode: y.fb,
					shouldUseShredditPlayer: (e, t) => {
						let {
							pageLayer: s,
							post: i
						} = t;
						return ((e, t, s) => {
							var i;
							return Object(E.c)(e, {
								experimentEligibilitySelector: E.a,
								experimentName: f.Ic
							}) === f.Hd && !s.isSponsored && Et.includes(null === (i = null == t ? void 0 : t.meta) || void 0 === i ? void 0 : i.name)
						})(e, s, i)
					},
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(be.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(be.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: wt.d,
					isNsfwBlurSubreddit: yt.e,
					isOptionalTextExpEnabled: vt.a
				}),
				ns = Object(d.b)(is, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(H.y)(t, s)),
					openPost: t => e(Object(H.K)(t)),
					openPostLink: t => e(Object(H.Z)(Object(mt.b)(t.permalink), t.id))
				})),
				as = Object(R.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class os extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && le.c.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === le.o.EMBED ? e.provider : null;
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
						return !!e && le.c.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && le.c.has(t.type)) {
							if (this.iframe) {
								const i = t.type === le.o.EMBED ? t.provider : null;
								i && !le.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? le.f.Pause : le.f.Play;
							e.contentWindow.postMessage({
								context: zt,
								method: s
							}, J), e.contentWindow.postMessage({
								context: zt,
								method: le.f.Mute
							}, J)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === le.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: le.B.Pause
						}), J) : e.contentWindow.postMessage({
							context: zt,
							method: le.f.Pause
						}, J))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === le.o.EMBED ? e.provider : null;
						if (this.iframe && s && !le.s.has(s)) {
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
						viewportHeight: le.d,
						viewportWidth: le.e
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Zt(this.props.post) && (this.visibilityChangeSubscriptionId = B.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && ts(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && B.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && ts(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					let a = "";
					return i && (a += i), t && e ? a += `${Jt}${t}` : s.title && (a += `${Jt}${s.title}`), a.length > Kt ? Object(W.a)(a, Kt, M.nb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(le.j, this.state.viewportHeight),
						s = Math.min(Yt, 16 * t / 9);
					s === Yt && (t = 9 * Yt / 16), e = this.state.viewportWidth >= dt.c ? this.state.viewportWidth < Re.k ? this.state.viewportWidth - qt - 2 * $t : this.state.viewportWidth - qt - Re.e - 2 * $t : this.state.viewportWidth - 2 * $t;
					const i = this.state.viewportHeight - 2 * $t;
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
					let s = le.j,
						i = le.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = le.t, i = le.u), {
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
						isListing: a,
						post: o
					} = e, r = o.media && o.media.obfuscated || "";
					let l = !o.media || Object(le.O)(o.media) || Object(le.I)(o.media) || Object(le.G)(o.media) ? "" : o.media.content,
						[d, c] = !o.media || Object(le.L)(o.media) || Object(le.N)(o.media) || Object(le.G)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (n && o.media && Object(le.G)(o.media)) {
						d = ue(o.media.mediaMetadata || {}, ce(a), le.p, n) + le.i, c = n
					}
					if (n && o.media && (o.media.type === le.o.IMAGE || o.media.type === le.o.GIFVIDEO)) {
						const e = Nt(n, o.media.resolutions);
						e && (l = e.url, c = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === le.o.IMAGE || o.media.type === le.o.GIFVIDEO)) {
						let e;
						(e = Object(le.M)(o.media.height, o.media.width) && Object(Ne.b)(o.media.height) ? Lt(o.media.height, o.media.width, o.media.resolutions) : Pt(o.media.resolutions)) && (l = e.url, c = e.width, d = e.height)
					}
					if (e.isExpando)
						if (c > t.viewportWidth) {
							d *= t.viewportWidth / c, c = t.viewportWidth
						} else if (d > t.viewportHeight) {
						const e = t.viewportHeight / d;
						d = t.viewportHeight, c *= e
					}
					const {
						maxVideoHeight: u,
						maxVideoWidth: p
					} = this.getVideoMaxDimensions(e, t);
					if (o.media && o.media.type === le.o.VIDEO) {
						const t = d / c;
						e.isExpando ? (d = u, c = p) : t > le.b ? (d = u, c = Math.min(Math.max(u / t, le.r), p)) : (d = Math.min(Math.max(p * t, le.q), u), c = p)
					}
					o.media && o.media.type === le.o.EMBED && (o.isSurveyAd && (l = Object(P.a)(s, o.impressionId, o.postId, i), d = 475, c = 475), e.isExpando && o.media.provider !== le.v.Twitter && (d = u, c = p));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / c;
						m = Math.abs(e - le.b) > .01
					}
					return {
						source: l,
						obfuscated: r,
						width: c,
						height: d,
						needsBackgroundBlur: m
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNsfwBlurSubreddit: s,
						isNSFW: i,
						isOverlay: n,
						isSpoiler: a,
						theme: o
					} = this.props;
					if (e || t || this.state.isRevealed || n) return !1;
					const r = s && i;
					return i && !o.subredditContext.shouldShowNSFWContent || a || r
				}
				render() {
					var e, t;
					const {
						autoplayPref: s,
						className: i,
						crosspost: n,
						currentUserId: a,
						fireAdPixelsOfType: r,
						flairStyleTemplate: d,
						forceAspectRatio: c,
						isCommentsPage: p,
						isExpando: m,
						isGalleryTileLayout: h,
						isListing: g,
						isMediumHeight: b,
						isNotCardView: f,
						isNsfwBlurSubreddit: E,
						isNSFW: v,
						isOptionalTextExpEnabled: x,
						isSpoiler: y,
						isTitleOnly: O,
						nightmode: w,
						openPost: I,
						post: C,
						showCentered: S,
						showFull: T = !1,
						showPromotedCTA: j,
						shouldUseShredditPlayer: N,
						subredditOrProfileDisplayText: L
					} = this.props, {
						canLoadContent: P,
						isBackgrounded: k,
						shouldPause: M,
						shouldStop: _,
						viewportWidth: R
					} = this.state, B = E && v;
					if (!C.media) return null;
					let W;
					C.media.type !== le.o.TEXT && (W = C.media.richtextContent);
					const H = x && W,
						G = k || M,
						J = _,
						{
							source: $,
							obfuscated: z,
							height: q,
							width: Q,
							needsBackgroundBlur: X
						} = this.getMediaInfo(this.props, this.state, a, w),
						Z = {
							showCentered: S,
							isListing: g,
							showFull: T,
							height: q,
							width: Q
						},
						ee = {
							...Z,
							className: i,
							forceAspectRatio: c,
							viewportWidth: R
						},
						te = this.shouldBlur(),
						se = !((null === (e = C.pollData) || void 0 === e ? void 0 : e.isPrediction) && !p),
						ie = !(!C.isSponsored || !C.source),
						ne = Object(Tt.vb)() || "",
						ae = C.isSponsored ? Object(st.b)(C.id, {
							fireAdPixelsOfType: r,
							openPost: I
						}) : o.a,
						oe = e => {
							ae && ae(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (z && te) return l.a.createElement(Le.a, Ft({}, ee, {
						blurSrc: z
					}), l.a.createElement(Qt, {
						isVisible: P
					}, l.a.createElement(Ne.a, Ft({}, Z, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: g,
						isNSFW: v,
						isNsfwBlockingModalEligible: B,
						isSpoiler: y,
						isVideoThumbnail: !!C.media && C.media.type === le.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: C.id,
						shouldBlur: te,
						source: z,
						outboundUrl: ie && C.source.outboundUrl || void 0,
						originalSource: $,
						onPostMediaClick: this.handlePostMediaClick,
						fireAdPixelsOfType: this.props.fireAdPixelsOfType
					}))));
					if (!C.media) return null;
					switch (C.media.type) {
						case le.o.RTJSON:
							const e = Object(pt.a)(C, null);
							if (null === e) return null;
							if (!T && !Object(ut.a)(C, null === (t = this.props.theme) || void 0 === t ? void 0 : t.subredditContext)) return null;
							const a = C.isMeta ? ft(e, C.id) : e;
							return l.a.createElement(l.a.Fragment, null, se && l.a.createElement(Ge, {
								canLoadContent: P,
								className: i,
								"data-click-id": "text",
								"data-adclicklocation": u.a.MEDIA,
								isCommentsPage: p,
								isExpando: m,
								isMediumHeight: b,
								isRichTextTruncated: C.media.isRichtextPreview,
								isTitleOnly: O,
								postId: C.id,
								showFull: T
							}, l.a.createElement(lt.b, {
								altText: this.getAltText(),
								content: a,
								flairStyleTemplate: d,
								isListing: g,
								isNSFW: v,
								isNsfwBlockingModalEligible: B,
								isSpoiler: y,
								mediaMetadata: C.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: C.id,
								rtJsonElementProps: as(this.props),
								renderMediaAsLinks: g,
								shouldBlur: te
							}), l.a.createElement(F.b, {
								content: a
							})), l.a.createElement(Ae, {
								postId: C.id,
								isCommentsPage: !!p
							}));
						case le.o.TEXT:
							if (Object(ht.a)(C)) {
								const e = "Text post should not include body content";
								return V.c.withScope(t => {
									t.setExtra("info", {
										post: C,
										isListing: g,
										isCommentsPage: p
									}), V.c.captureMessage(e)
								}), Object(D.a)() && console.log(`${C.id}: ${e}`), l.a.createElement(l.a.Fragment, null, se && l.a.createElement(Ge, {
									postId: C.id,
									className: i,
									"data-click-id": "text",
									"data-adclicklocation": u.a.MEDIA,
									isCommentsPage: p,
									showFull: T
								}, l.a.createElement(rt, {
									flairStyleTemplate: d,
									html: C.isMeta ? bt(C.media.content, C.id, Ut.a.hiddenLink) : C.media.content
								})), l.a.createElement(Ae, {
									postId: C.id,
									isCommentsPage: !!p
								}))
							}
							return l.a.createElement(Ae, {
								postId: C.id,
								isCommentsPage: !!p
							});
						case le.o.EMBED:
							return this.props.isMiniCard && C.preview && C.preview.url ? l.a.createElement(Le.a, Ft({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(Qt, {
								isVisible: P
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Ft({}, Z, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: g,
								isNSFW: v,
								isCrosspost: !!n,
								isSpoiler: y,
								postId: C.id,
								shouldBlur: te,
								source: C.preview.url,
								originalSource: C.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(tt.a, null)))) : le.h.has(C.media.provider) ? C.media.provider === le.v.Twitter ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Ze, {
								canLoadContent: P,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ee,
								onIframeLoaded: this.onIframeLoaded,
								source: $,
								title: C.title,
								postId: C.id
							}), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Ft({}, ee, {
								alwaysWrapMedia: !0,
								height: m ? q : le.j,
								width: m ? Q : le.j * (16 / 9)
							}), P && l.a.createElement(Y.a, {
								childRef: this.storeChildRef,
								height: m ? q : le.j,
								width: m ? Q : void 0,
								isListing: g,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: S,
								showFull: T,
								source: $,
								title: C.title
							})), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Ft({}, ee, {
								alwaysWrapMedia: !0
							}), P && l.a.createElement(Y.a, Ft({}, Z, {
								isResponsive: m || C.media.provider === le.v.IFrameEmbed,
								title: C.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: $,
								fullWidth: C.media.provider === le.v.IFrameEmbed
							}))), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							}));
						case le.o.GIFVIDEO: {
							let e = q,
								t = Q;
							return e > le.j && (t = Q / q * (e = le.j)), l.a.createElement(Le.a, Ft({}, ee, {
								blurSrc: X ? C.media.gifBackgroundImage : void 0
							}), l.a.createElement(Qt, {
								isVisible: P
							}, l.a.createElement(et.a, Ft({}, Z, {
								isNotCardView: f,
								height: m ? void 0 : e,
								width: m ? void 0 : t,
								postId: C.id,
								shouldLoad: !0,
								shouldPause: g && G,
								source: $,
								originalSource: C.media.content,
								isPromoted: C.isSponsored
							})), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							})))
						}
						case le.o.VIDEO: {
							const e = C.media.posterUrl || C.preview && C.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Ft({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(Qt, {
								isVisible: P
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Ft({}, Z, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: g,
								isNSFW: v,
								isCrosspost: !!n,
								isSpoiler: y,
								postId: C.id,
								shouldBlur: te,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(tt.a, null)))), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							}));
							const t = C.reactedFrom && C.attributionInfo ? {
									id: C.id,
									reactedFrom: {
										...C.reactedFrom
									},
									attributionInfo: {
										...C.attributionInfo
									},
									isReactAllowed: C.isReactAllowed
								} : void 0,
								i = N ? l.a.createElement(Wt, {
									autoplay: s,
									postId: C.id,
									hlsSource: C.media.hlsUrl,
									pageLayer: this.props.pageLayer,
									posterUrl: C.media.posterUrl,
									scrubberThumbSource: C.media.scrubberThumbSource
								}) : l.a.createElement(Gt, {
									key: C.id,
									autoPlay: s && !1 === M,
									isExpando: m,
									shouldLoad: !0,
									shouldPause: G,
									shouldStop: J,
									isBackgrounded: k,
									hlsSource: C.media.hlsUrl,
									mpegDashSource: C.media.dashUrl,
									isGif: C.media.isGif,
									scrubberThumbSource: C.media.scrubberThumbSource,
									postId: C.id,
									isSponsored: C.isSponsored,
									onAdPostClick: oe,
									callToActionSource: C.source || void 0,
									callToActionText: C.callToAction,
									isListing: g,
									posterUrl: C.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: C.id,
									muxVideoIsLive: !1,
									muxVideoTitle: C.title,
									sessionId: ne,
									reactPostInfo: t,
									isCommentsPage: p
								}),
								a = l.a.createElement(Le.a, Ft({}, ee, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), P ? i : null);
							return C.isSponsored ? l.a.createElement(U.a, {
								post: C,
								trackVideo: !0
							}, a) : l.a.createElement(l.a.Fragment, null, a, H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							}))
						}
						case le.o.IMAGE:
							const o = this.state.viewportHeight - 2 * $t,
								r = this.state.viewportWidth - 2 * $t;
							let c = $;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (C.thumbnail && Object(A.a)(C.thumbnail.url) ? c = C.thumbnail.url : C.preview && Object(A.a)(C.preview.url) && (c = C.preview.url)), l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Ft({}, ee, {
								blurSrc: X ? c : void 0,
								isExpando: !!m
							}), l.a.createElement(Qt, {
								isVisible: P
							}, l.a.createElement(Ne.a, Ft({}, Z, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: m,
								isListing: g,
								isNSFW: v,
								isCrosspost: !!n,
								isSpoiler: y,
								maxHeight: m ? o : void 0,
								maxWidth: m ? r : void 0,
								postId: C.id,
								shouldBlur: te,
								source: c,
								outboundUrl: ie && C.source.outboundUrl || void 0,
								isSponsored: C.isSponsored,
								originalSource: C.media.content,
								onPostMediaClick: this.handlePostMediaClick,
								fireAdPixelsOfType: this.props.fireAdPixelsOfType
							})))), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							}));
						case le.o.GALLERY:
							const E = ue(C.media.mediaMetadata || {}, ce(g), le.p, Q),
								x = (re = C.media.gallery, de = C.isSponsored, re && re.items && !de && re.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? le.i : 0);
							return l.a.createElement(Le.a, Ft({}, ee, {
								blurSrc: X ? $ : void 0,
								isExpando: !!m,
								maxGalleryHeight: E + x,
								className: Ut.a.galleryMediaContainer,
								isGalleryTileLayout: h
							}), l.a.createElement(Qt, {
								isVisible: P
							}, l.a.createElement(je, {
								post: C,
								postId: C.id,
								postTitle: C.title,
								subredditName: L,
								galleryItems: C.media.gallery ? C.media.gallery.items : [],
								mediaMetadata: C.media.mediaMetadata || {},
								imageHeight: E,
								captionHeight: x,
								isSponsored: C.isSponsored,
								showPromotedCTA: !!j,
								className: this.props.imageBoxClassName,
								isListing: g,
								isNSFW: v,
								isNsfwBlockingModalEligible: B,
								isSpoiler: y,
								shouldBlur: te,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!h,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: P
							}), H && l.a.createElement(K.a, {
								content: W,
								rtJsonElementProps: as(this.props)
							})));
						default:
							return null
					}
					var re, de
				}
			}
			const rs = ss(ns(Object(p.a)(Object(_.a)(os))))
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
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = (e, t) => !(!Object(i.a)(e) && !e.pollData) && (!e.isSpoiler && !(e.isNSFW && (null == t || !t.shouldShowNSFWContent)))
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
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var i = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				a = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					gallery: o.s(e, t, s),
					post: o.K(e, t),
					...o.o(e)
				}),
				l = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.C(s, e)
				}),
				d = (e, t) => s => {
					const l = Object(n.a)(t),
						d = Object(a.d)(s, e) + 1;
					return {
						...r(s, e, d),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.C(s, e),
							outboundUrl: t,
							outboundDomain: l ? l.hostname : void 0
						}
					}
				},
				c = (e, t) => p(e, !0, t),
				u = (e, t) => p(e, !1, t),
				p = (e, t, s) => n => ({
					...r(n, e, s),
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
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/helpers/isCrosspost.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = (e, t) => {
				let {
					post: s,
					pageLayer: r
				} = t;
				if (Object(o.F)(r)) return !0;
				const l = Object(o.y)(r),
					d = Object(a.a)(s);
				return !(!l || d) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: i.Ib
					}) === i.Hd
				})(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.dd15e1412cc601047e22.js.map