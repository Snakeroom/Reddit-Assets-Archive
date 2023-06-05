// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.b07a14af85b47ed78ab7.js
// Retrieved at 6/5/2023, 1:30:04 PM by Reddit Dataminer v1.0.0
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
				return cs
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
				v = s("./src/reddit/helpers/chooseVariant/index.ts");
			const E = Object(c.a)(e => {
				const t = Object(v.c)(e, {
					experimentEligibilitySelector: v.a,
					experimentName: f.Je
				});
				return Object(f.yg)(t) ? void 0 : t
			}, e => {
				const t = Object(v.c)(e, {
					experimentEligibilitySelector: v.a,
					experimentName: f.Ke
				});
				return Object(f.yg)(t) ? void 0 : t
			}, (e, t) => e === f.Me.Enabled && t === f.Me.Enabled);
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
			var S;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(S || (S = {}));
			const C = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(I).join("")
			})(S.SHA1, e);

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
			var P = function(e, t) {
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
						saltLength: v,
						saltTimeToLive: I,
						viewerUserIdLength: S
					} = {
						...N,
						...t
					};
					class P extends r.Component {
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
							const e = this.props.redditUserId || P.ANONYMOUS_USER_ID,
								t = this.getOrCreateSalt(),
								s = `${w()}${e}${t}`;
							return (await C(s)).substr(0, P.VIEWER_USER_ID_LENGTH)
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
								debug: P.DEBUG,
								disableCookies: P.DISABLE_COOKIES,
								respectDoNotTrack: P.RESPECT_DO_NOT_TRACK,
								...s,
								data: {
									env_key: P.ENV_KEY,
									experiment_name: this.experimentName,
									player_init_time: this.playerInitTime,
									player_name: P.PLAYER_NAME,
									player_version: P.PLAYER_VERSION,
									...t,
									viewer_user_id: e
								}
							}
						}
						getOrCreateSalt() {
							const e = P.LOCAL_STORAGE_SALT_KEY;
							let t = Object(m.a)(e);
							return t || (t = O(P.SALT_LENGTH), Object(m.b)(e, t, P.SALT_TIME_TO_LIVE)), t
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
								video_duration: s ? P.DURATION_LIVE : e,
								video_id: t,
								video_stream_type: s ? P.STREAM_TYPE_LIVE : P.STREAM_TYPE_ON_DEMAND,
								video_title: i,
								view_session_id: this.props.sessionId,
								player_software_version: this.getDashInstanceData() ? x.a.dashVersion : this.getHlsInstanceData() ? x.a.hlsVersion : null
							}
						}
					}
					P.displayName = j(e), P.ANONYMOUS_USER_ID = s, P.DEBUG = i, P.DISABLE_COOKIES = n, P.DURATION_LIVE = 1 / 0, P.ENV_KEY = a, P.LOCAL_STORAGE_SALT_KEY = o, P.LOCAL_STORAGE_VIEWER_USER_ID_KEY = u, P.PLAYER_NAME = p, P.PLAYER_VERSION = g, P.RESPECT_DO_NOT_TRACK = f, P.SALT_LENGTH = v, P.SALT_TIME_TO_LIVE = I, P.STREAM_TYPE_LIVE = "live", P.STREAM_TYPE_ON_DEMAND = "on-demand", P.VIEWER_USER_ID_LENGTH = S;
					const L = Object(r.forwardRef)((e, t) => l.a.createElement(P, T({}, e, {
							forwardedRef: t
						}))),
						M = Object(c.c)({
							redditUserId: y.k,
							isMuxEnabled: E
						});
					return Object(d.b)(M, null, null, {
						forwardRef: !0
					})(L)
				},
				L = s("./src/lib/ads/index.ts"),
				M = s("./src/lib/ads/utils.ts"),
				k = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				D = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				A = s("./src/lib/env/index.ts"),
				R = s("./src/lib/isUrl/index.ts"),
				B = s("./src/lib/objectSelector/index.ts"),
				V = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				W = s("./src/lib/sentry/index.ts"),
				U = s("./src/lib/truncateText/index.ts"),
				H = s("./src/reddit/actions/post.ts"),
				F = s("./src/reddit/components/AdViewability/index.tsx"),
				G = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				K = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				J = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx");
			const $ = "https://www.redditmedia.com";
			var Y = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				z = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				q = s("./src/lib/hooks/usePrevious.ts"),
				Q = s("./src/reddit/helpers/trackers/gallery.ts");
			var X = (e, t, s) => {
					const i = Object(r.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(r.useEffect)(() => {
						if (t) return t.addEventListener("keydown", i), () => {
							t && t.removeEventListener("keydown", i)
						}
					}, [t, i])
				},
				Z = s("./src/reddit/hooks/useTracking.ts"),
				ee = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				te = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				se = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				ie = s("./src/reddit/actions/media.ts"),
				ne = s("./src/reddit/components/Media/BlurredContent.tsx"),
				ae = s("./src/reddit/constants/adEvents.ts"),
				oe = s("./src/reddit/constants/keycodes.ts"),
				re = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				le = s.n(re),
				de = s("./src/reddit/models/Media/index.ts");

			function ce(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}
			const ue = e => e ? de.j : de.d;

			function pe(e, t, s, i) {
				const n = me(e);
				if (be(n, t)) return t;
				const a = he(n);
				let o = a.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / a.x), o > t ? t : o)
			}
			const me = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				he = e => e.reduce((e, t) => ge(e, t), e && e[0] || []),
				ge = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				be = (e, t) => e.some(e => e.y > t && Object(de.M)(e.y, e.x));
			var fe = s("./src/reddit/selectors/media.ts"),
				ve = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				Ee = s.n(ve);
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = e => {
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
				}, xe._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, Oe = (e, t, s) => {
				const i = me(e),
					n = he(i),
					a = n.x / n.y < 1,
					o = function(e) {
						const t = me(e),
							s = t.every(e => e.y > e.x),
							i = t.every(e => e.x > e.y);
						return !s && !i
					}(e),
					r = function(e, t, s) {
						const i = me(e);
						if (be(i, t)) return !0;
						const n = he(i).y;
						return !n || n < s
					}(e || {}, ue(s), de.p);
				return s || r || o || a ? {
					height: t
				} : {
					paddingBottom: `${Object(de.C)(n.y,n.x)}%`
				}
			}, we = e => {
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
				}, b = ue(r), f = a.y > b && Object(de.M)(a.y, a.x), v = f ? {} : {
					maxHeight: "100%"
				};
				let E;
				return E = i || (f ? a : "gif" in a ? a : n), l.a.createElement("li", {
					style: g,
					className: Ee.a.slide
				}, l.a.createElement("figure", {
					className: Object(k.a)({
						[Ee.a.tallImage]: f,
						[Ee.a.commonImage]: !f
					}, Ee.a.figure)
				}, r || p ? l.a.createElement(ye, {
					displayImage: E,
					style: v,
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
				}, l.a.createElement(ye, {
					displayImage: E,
					style: v,
					showSeeMore: f,
					isReadyToShow: m,
					imgAltText: o
				}), h && !c && l.a.createElement(ne.a, {
					isNSFW: !!d,
					isSpoiler: !!u
				}))))
			}, Ie = e => l.a.createElement("a", {
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
			}, l.a.createElement(ee.a, {
				className: Ee.a.iconImage
			}))), Se = e => l.a.createElement("div", {
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
				const t = le.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			})(e.outboundUrl)), l.a.createElement(te.a, {
				className: Ee.a.linkIcon
			})))), Ce = e => l.a.createElement("div", {
				className: Ee.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && l.a.createElement(se.a, {
				className: Ee.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), Te = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, je = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			var Ne = e => {
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
							subredditName: v,
							isVisible: E
						} = e,
						x = Object(d.e)(e => Object(fe.d)(e, h)),
						y = x > 0,
						O = x < i.length - 1,
						w = Object(Z.a)(),
						I = Object(r.useRef)(null),
						S = Object(r.useRef)(null),
						[C, T] = Object(r.useState)(E ? x : -1),
						[j, N] = Object(r.useState)(E ? x : -1),
						P = Object(q.a)(E),
						L = Object(q.a)(x);
					Object(r.useEffect)(() => {
						(void 0 !== P && P !== E && E && C < 0 && j < 0 || void 0 !== L && L !== x && E && (C > x || j < x)) && (T(Te(x, 1)), N(je(x, i.length, 1)))
					}, [P, x, E, C, j, L, i.length, h]);
					const M = Object(r.useRef)(),
						D = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								t ? (C < 0 || j - C == 0) && (M.current = setTimeout(() => {
									const e = je(j, i.length);
									e !== j && N(e)
								}, 1e3)) : (C < 0 || j - C == 0) && clearTimeout(M.current)
							})
						}, [C, j, i.length]);
					Object(z.a)(S, D);
					const A = Object(r.useCallback)(e => {
							t(Object(ie.f)({
								postId: h,
								index: e
							}))
						}, [t, h]),
						R = Object(r.useCallback)(e => {
							t(Object(H.y)(m, ae.a.GalleryItemImpression, `Slide${e}`))
						}, [t, m]),
						B = Object(r.useCallback)(() => {
							t(Object(ie.i)({
								postId: h,
								isTileLayout: !c
							}))
						}, [t, h, c]),
						V = Object(r.useCallback)(() => {
							if (!O) return;
							const e = x + 1;
							if (e + 1 >= j) {
								const e = je(j, i.length);
								e !== j && N(e)
							}
							A(e), w(Q.b(h, e)), w(Q.d(h, e + 1)), R(e)
						}, [O, x, R, A, w, h, j, i.length]),
						W = Object(r.useCallback)(() => {
							if (!y) return;
							const e = x - 1;
							if (e - 1 <= C) {
								const e = Te(C);
								e !== C && T(e)
							}
							const t = x + 1;
							A(e), w(Q.a(h, t)), w(Q.d(h, t - 1)), R(e)
						}, [y, x, R, A, w, h, C]),
						F = Object(r.useCallback)(() => {
							const e = i[x] && i[x].outboundUrl;
							e && w(Q.c(h, e))
						}, [w, h, x, i]);
					X(oe.a.ArrowLeft, I.current, W), X(oe.a.ArrowRight, I.current, V);
					const G = i[x] && i[x].caption,
						K = i[x] && i[x].outboundUrl,
						J = Oe(p, n, a);
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
							o = ce(de.z, a);
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
					}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && l.a.createElement(ne.a, {
						isNSFW: !!e.isNSFW,
						isSpoiler: !!e.isSpoiler
					})) : l.a.createElement("div", {
						className: Ee.a.slideshowContainer,
						tabIndex: -1,
						ref: S,
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
							d = Object(U.a)(v ? `${v} - ${r}` : r, 300, _.ob),
							c = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
							u = ce(n, c);
						if (!u) return null;
						const m = e.shouldBlur && ce(n, a.o || []) || void 0,
							h = s >= C && s <= j;
						return l.a.createElement(we, {
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
					})), !e.shouldBlur && l.a.createElement(l.a.Fragment, null, l.a.createElement(Ie, {
						onClick: W,
						setFocusTo: S,
						hasMoreSlides: y,
						title: xe._("Previous", null, {
							hk: "3dZcTi"
						}),
						iconClassName: Ee.a.prevIcon,
						className: Ee.a.prevButton
					}), l.a.createElement(Ie, {
						onClick: V,
						setFocusTo: S,
						hasMoreSlides: O,
						title: xe._("Next", null, {
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
					}) : l.a.createElement(Se, {
						caption: G,
						onClickEvent: F,
						outboundUrl: K,
						captionHeight: s
					}))
				},
				Pe = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				Le = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				Me = s("./src/reddit/models/Prediction/index.ts"),
				ke = s("./src/reddit/selectors/poll/index.ts"),
				_e = s("./src/reddit/components/Econ/Prediction/async.ts"),
				De = s("./src/reddit/components/Poll/async.ts");
			const Ae = Object(c.c)({
				poll: ke.e
			});
			var Re = Object(d.b)(Ae)(e => {
					let {
						isCommentsPage: t,
						poll: s,
						postId: i
					} = e;
					return s ? Object(Me.c)(s) ? l.a.createElement(_e.a, {
						postId: i
					}) : l.a.createElement(De.a, {
						postId: i,
						isCommentsPage: t
					}) : null
				}),
				Be = s("./src/reddit/constants/componentSizes.ts"),
				Ve = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				We = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				Ue = s.n(We);
			class He extends l.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(Ve.a)({
						isLoading: !0
					});
					return l.a.createElement("div", {
						className: Ue.a.placeholder
					}, [1, 2, 3].map(t => l.a.createElement("div", {
						key: t,
						className: Ue.a.placeholderParagraph
					}, l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}))))
				}
			}
			var Fe = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(H.x)(t))
			}))(He);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Ke = e => {
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
							[Ue.a.richTextContainerFull]: u,
							[Ue.a.richTextContainerTitleOnly]: d && !u,
							[Ue.a.richTextContainer]: !u && !d
						},
						h = {};
					u || (h.maxHeight = d ? `${de.m}px` : a ? `${de.l}px` : `${de.k}px`), n && (h.maxWidth = `${Be.d}px`);
					const g = o && u;
					return l.a.createElement("div", Ge({
						className: Object(k.a)(m, i),
						style: h
					}, p), s, g && l.a.createElement(Fe, {
						canLoadContent: !!t,
						isExpando: r,
						postId: c
					}))
				},
				Je = s("./node_modules/fbt/lib/FbtPublic.js"),
				$e = s("./src/lib/intersectionObserver/index.ts"),
				Ye = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				ze = s.n(Ye);

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Qe = 550,
				Xe = 100,
				Ze = 300;

			function et(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: i,
					embedBoxChildRef: n,
					source: a,
					title: o,
					postId: c
				} = e, [u, p] = Object(r.useState)(!1), m = Object(q.a)(t), h = Object(r.useRef)(), {
					height: g,
					isDeleted: b
				} = Object(d.e)(e => e.mediaEmbed[c] || {}), f = u ? b ? Xe : g : Ze, v = s.isListing ? Math.min(f, de.j) : f;

				function E(e) {
					var t;
					u || (null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || p(!0)
				}
				return Object(r.useEffect)(() => (window.addEventListener("message", E), () => {
					h.current && Object($e.b)(h.current), window.removeEventListener("message", E)
				}), []), Object(r.useEffect)(() => {
					!t && m && p(!1)
				}, [m, t]), l.a.createElement(Le.a, qe({}, s, {
					alwaysWrapMedia: !0,
					height: v + 8,
					showFull: !s.isListing,
					width: Qe
				}), t && l.a.createElement("div", {
					className: ze.a.tweetContainer,
					style: {
						height: v
					}
				}, !u && l.a.createElement("div", {
					className: Object(k.a)(Object(Ve.a)({
						isLoading: !0
					}), ze.a.tweetPlaceholder)
				}), u && b && l.a.createElement("p", {
					className: ze.a.tweetDeleted
				}, Je.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), l.a.createElement(Y.a, {
					childRef: function(e) {
						h.current = e, e && Object($e.a)(e, (t, s) => {
							e && e.contentWindow && !g && s && (p(!1), e.contentWindow.postMessage("twitter-measure-requested", $))
						}), n(e)
					},
					className: Object(k.a)(ze.a.tweetEmbedBox, {
						[ze.a.isInvisible]: !u || b
					}),
					fullWidth: !0,
					height: v,
					isListing: s.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: s.isListing ? de.j : null,
					onLoad: i,
					showCentered: s.showCentered,
					showFull: !0,
					source: a,
					title: o
				}), s.isListing && f > de.j && l.a.createElement("div", {
					className: ze.a.seeMore
				}, Je.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
			var tt = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				st = s("./src/reddit/components/PlayButton/index.tsx"),
				it = s("./src/reddit/components/PostList/index.tsx"),
				nt = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				at = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				ot = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var lt = Object(D.a)(e => {
					let {
						flairStyleTemplate: t,
						...s
					} = e;
					return l.a.createElement(ot.a, rt({
						style: {
							color: Object(at.a)(Object(nt.a)({
								flairStyleTemplate: t,
								...s
							}))
						}
					}, s))
				}),
				dt = s("./src/reddit/components/RichTextJson/index.tsx"),
				ct = s("./src/reddit/constants/screenWidths.ts"),
				ut = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pt = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				mt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ht = s("./src/reddit/helpers/path/index.ts"),
				gt = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				bt = s("./src/lib/redditId/index.ts");

			function ft(e, t, s) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(bt.c)(t)}`, `class="${s}" href="https://www.reddit.com/poll/${Object(bt.c)(t)}`)
			}

			function vt(e, t) {
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
				}(e.document, Object(bt.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
			const Et = [_.Tb.INDEX, _.Tb.COMMENTS, _.Tb.SUBREDDIT, ..._.Ib];
			var xt = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				yt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ot = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				wt = s("./src/reddit/selectors/experiments/postSeo.ts"),
				It = s("./src/reddit/selectors/meta.ts"),
				St = s("./src/reddit/selectors/postCreations.ts"),
				Ct = s("./src/reddit/selectors/posts.ts"),
				Tt = s("./src/reddit/selectors/seo/index.ts"),
				jt = s("./src/reddit/selectors/telemetry.ts");
			const Nt = (e, t, s, i) => {
					const n = e / t,
						a = s / i;
					return Math.abs(n - a) < .03
				},
				Pt = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				Lt = (e, t, s) => {
					for (let i = 0; i < s.length; i++) {
						const n = s[i];
						if (n.width >= de.d / 2 && Nt(e, t, n.height, n.width)) return n
					}
				},
				Mt = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= de.d || s.width >= de.e) return s
					}
				};
			var kt = s("./node_modules/@reddit/adblock-detection/browser.js"),
				_t = s("./src/reddit/actions/preferences.ts"),
				Dt = s("./src/reddit/actions/video.ts"),
				At = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Rt = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				Bt = s("./src/reddit/helpers/trackers/media.ts"),
				Vt = s("./src/reddit/selectors/platform.ts");

			function Wt() {
				return (Wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Ut
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ht = Object(d.b)(() => Object(c.c)({
				autoplayPref: y.d
			}), (e, t) => {
				let {
					post: s,
					postId: i
				} = t;
				return {
					onPlayedExpanded: () => {
						i && e(Dt.N(s, i, e))
					},
					onPlayedWithSound: () => {
						i && e(Dt.O(!0, i))
					},
					onWatchedPercent: t => {
						i && e(Dt.db(t, i))
					},
					onWatchedSeconds: t => {
						i && e(Dt.eb(t, i))
					},
					onVideoStarted: () => {
						i && e(Dt.bb(i))
					},
					setAutoplayPref: t => e(_t.s(t))
				}
			});
			var Ft = Object(r.memo)(Ht(Object(At.b)(e => {
					var t, i;
					const n = Object(r.useRef)(),
						a = Object(r.useRef)(),
						o = Object(Z.a)(),
						[c, u] = Object(r.useState)("ready"),
						{
							autoplayPref: p,
							hlsSource: m,
							isGif: h,
							isMp4DeliveryEnabled: g,
							isOverlay: b,
							onPlayedExpanded: f,
							onPlayedWithSound: v,
							onWatchedPercent: E,
							onWatchedSeconds: x,
							onVideoStarted: y,
							packagedMedia: O,
							pageLayer: w,
							post: I,
							postId: S,
							posterUrl: C,
							setAutoplayPref: T,
							scrubberThumbSource: j
						} = e || {},
						N = m || void 0,
						P = Object(d.e)(Vt.i),
						L = !b && P;
					Object(r.useEffect)(() => {
						"ready" === c && async function() {
							try {
								u("importing"), await Promise.all([Promise.all([s.e("vendors~mod-nav~shreddit-player"), s.e("vendors~shreddit-player")]).then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js")), Promise.all([s.e("vendors~mod-nav~shreddit-player"), s.e("vendors~shreddit-player")]).then(s.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js"))]), u("done")
							} catch (e) {
								console.error("Error importing shreddit-player", e), u("error"), W.c.withScope(t => {
									t.setExtra("info", {
										postId: S
									}), W.c.captureException(e)
								})
							}
						}()
					}, [c, S]), Object(r.useEffect)(() => {
						if ("done" !== c) return;
						const e = e => {
								e.stopPropagation();
								const {
									details: t
								} = (null == e ? void 0 : e.detail) || {};
								if (S && t) {
									const {
										action: e,
										noun: s,
										media: i,
										playback: n
									} = t;
									o(Object(Bt.b)(S, e, s, i, null == n ? void 0 : n.id)), I.isSponsored && function(e) {
										let {
											action: t,
											noun: s,
											onPlayedExpanded: i,
											onPlayedWithSound: n,
											onWatchedPercent: a,
											onWatchedSeconds: o,
											onVideoStarted: r
										} = e;
										if ("video" === s && /^watch_\d+_seconds$/.test(t)) {
											const e = parseInt(t.split("_")[1]);
											e && o(e)
										}
										if ("video" === s && /^watch_\d+_percent$/.test(t)) {
											const e = parseInt(t.split("_")[1]);
											e && a(e)
										}
										"click" === t && "unmute" === s && n();
										"start" === t && "video" === s && r();
										"play_expanded" === t && "video" === s && i()
									}({
										action: e,
										noun: s,
										onPlayedExpanded: f,
										onPlayedWithSound: v,
										onWatchedPercent: E,
										onWatchedSeconds: x,
										onVideoStarted: y
									})
								}
							},
							t = e => {
								var t, s;
								void 0 !== typeof(null === (t = e.detail) || void 0 === t ? void 0 : t.newValue) && T(null === (s = e.detail) || void 0 === s ? void 0 : s.newValue)
							},
							{
								current: s
							} = n;
						return null == s || s.addEventListener("track-event", e), null == s || s.addEventListener("change-autoplay-pref", t), () => {
							null == s || s.removeEventListener("track-event", e), null == s || s.removeEventListener("change-autoplay-pref", t)
						}
					}, [c, n, f, v, y, E, x, S, I.isSponsored, o, T]), Object(r.useEffect)(() => {
						var e;
						if ("done" !== c) return;
						const {
							current: t
						} = a;
						if (L && (null === (e = null == t ? void 0 : t.provider) || void 0 === e ? void 0 : e.state.canPlay)) try {
							null == t || t.pause()
						} catch (s) {}
					}, [c, L, a]);
					const M = {
							cursor: "default",
							height: "100%",
							width: "100%",
							maxHeight: "100%",
							maxWidth: "100%",
							color: "white"
						},
						k = {
							onClick: e => {
								e.stopPropagation()
							},
							style: M,
							"data-testid": "shreddit-player-wrapper"
						};
					if ("ready" === c || "importing" === c) return l.a.createElement("div", Wt({}, k, {
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
					}))));
					if ("error" === c) return l.a.createElement("div", Wt({}, k, {
						style: {
							...M,
							backgroundColor: "black",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}
					}), Ut._("Sorry, something went wrong when loading this video.", null, {
						hk: "9N3Tr"
					}));
					const _ = p && !b && (Object(Rt.z)(w) || !(e.isSponsored && Object(kt.hasAcceptableAds)())),
						D = g && void 0 !== (null === (t = null == O ? void 0 : O.playbackMp4s) || void 0 === t ? void 0 : t.duration) && (null === (i = null == O ? void 0 : O.playbackMp4s) || void 0 === i ? void 0 : i.duration) <= 45 ? JSON.stringify(O) : void 0;
					return l.a.createElement("div", k, l.a.createElement("media-telemetry-observer", {
						ref: n
					}, l.a.createElement("shreddit-player", {
						ref: a,
						autoplay: _ || void 0,
						"autoplay-pref": p || void 0,
						gif: h || void 0,
						"packaged-media-json": D,
						"play-out-of-viewport": Object(Rt.z)(w) || void 0,
						poster: C,
						preview: j || void 0,
						"show-autoplay-toggle": !0,
						src: N,
						ui: "desktop"
					}, l.a.createElement("source", {
						src: N,
						type: "application/vnd.apple.mpegURL"
					}))))
				})), (function(e, t) {
					const s = ["isGif", "isSponsored", "postId"];
					for (const i of s)
						if (e[i] !== t[i]) return !1;
					return !0
				})),
				Gt = s("./src/reddit/components/Media/index.m.less"),
				Kt = s.n(Gt);

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const $t = P(K.b, {
					playerName: "Reddit Player"
				}),
				Yt = 300,
				zt = " - ",
				qt = 1200,
				Qt = 75,
				Xt = "player.js",
				Zt = Be.q + Be.p,
				es = e => l.a.createElement("div", {
					className: Object(k.a)(Kt.a.visibilityWrapper, {
						[Kt.a.displayNone]: !e.isVisible
					})
				}, e.children),
				ts = new Set([de.o.EMBED, de.o.VIDEO, de.o.GIFVIDEO]),
				ss = e => !!e.media && ts.has(e.media.type),
				is = new Set([de.o.EMBED, de.o.GALLERY, de.o.GIFVIDEO, de.o.IMAGE, de.o.VIDEO]),
				ns = e => {
					let {
						post: t
					} = e;
					return !!t.media && is.has(t.media.type)
				},
				as = Object(ut.v)(),
				os = Object(c.c)({
					canUseOCRAltText: (e, t) => Object(wt.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(wt.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(wt.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ct.U)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(St.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(Tt.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const a = Object(fe.e)(e, i.id);
						return !(void 0 !== a || !n) || !!a
					},
					pageType: e => Object(jt.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ct.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: yt.b,
					isBlockingInterstitialV2Enabled: yt.c,
					currentUserId: y.Fb,
					nightmode: y.fb,
					shouldUseShredditPlayer: (e, t) => {
						let {
							pageLayer: s,
							post: i
						} = t;
						return ((e, t, s) => {
							var i;
							return !!Et.includes(null === (i = null == t ? void 0 : t.meta) || void 0 === i ? void 0 : i.name) && (!s.isSponsored || Object(v.c)(e, {
								experimentEligibilitySelector: v.a,
								experimentName: f.Uc
							}) === f.Td)
						})(e, s, i)
					},
					isMp4DeliveryEnabled: e => (e => Object(v.c)(e, {
						experimentEligibilitySelector: v.a,
						experimentName: f.ec
					}) === f.Td)(e),
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(fe.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(fe.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: It.d,
					isNsfwBlurSubreddit: Ot.e,
					isOptionalTextExpEnabled: xt.a
				}),
				rs = Object(d.b)(os, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(H.y)(t, s)),
					openPost: t => e(Object(H.K)(t)),
					openPostLink: t => e(Object(H.Z)(Object(ht.b)(t.permalink), t.id))
				})),
				ls = Object(B.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ds extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && de.c.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === de.o.EMBED ? e.provider : null;
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
						return !!e && de.c.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && de.c.has(t.type)) {
							if (this.iframe) {
								const i = t.type === de.o.EMBED ? t.provider : null;
								i && !de.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? de.f.Pause : de.f.Play;
							e.contentWindow.postMessage({
								context: Xt,
								method: s
							}, $), e.contentWindow.postMessage({
								context: Xt,
								method: de.f.Mute
							}, $)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === de.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: de.B.Pause
						}), $) : e.contentWindow.postMessage({
							context: Xt,
							method: de.f.Pause
						}, $))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === de.o.EMBED ? e.provider : null;
						if (this.iframe && s && !de.s.has(s)) {
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
						viewportHeight: de.d,
						viewportWidth: de.e
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					ss(this.props.post) && (this.visibilityChangeSubscriptionId = V.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && ns(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && V.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && ns(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return i && (a += i), t && e ? a += `${zt}${t}` : s.title && (a += `${zt}${s.title}`), a.length > Yt ? Object(U.a)(a, Yt, _.ob) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(de.j, this.state.viewportHeight),
						s = Math.min(qt, 16 * t / 9);
					s === qt && (t = 9 * qt / 16), e = this.state.viewportWidth >= ct.c ? this.state.viewportWidth < Be.k ? this.state.viewportWidth - Zt - 2 * Qt : this.state.viewportWidth - Zt - Be.e - 2 * Qt : this.state.viewportWidth - 2 * Qt;
					const i = this.state.viewportHeight - 2 * Qt;
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
					let s = de.j,
						i = de.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = de.t, i = de.u), {
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
					let l = !o.media || Object(de.O)(o.media) || Object(de.I)(o.media) || Object(de.G)(o.media) ? "" : o.media.content,
						[d, c] = !o.media || Object(de.L)(o.media) || Object(de.N)(o.media) || Object(de.G)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (n && o.media && Object(de.G)(o.media)) {
						d = pe(o.media.mediaMetadata || {}, ue(a), de.p, n) + de.i, c = n
					}
					if (n && o.media && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						const e = Pt(n, o.media.resolutions);
						e && (l = e.url, c = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						let e;
						(e = Object(de.M)(o.media.height, o.media.width) && Object(Pe.b)(o.media.height) ? Lt(o.media.height, o.media.width, o.media.resolutions) : Mt(o.media.resolutions)) && (l = e.url, c = e.width, d = e.height)
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
					if (o.media && o.media.type === de.o.VIDEO) {
						const t = d / c;
						e.isExpando ? (d = u, c = p) : t > de.b ? (d = u, c = Math.min(Math.max(u / t, de.r), p)) : (d = Math.min(Math.max(p * t, de.q), u), c = p)
					}
					o.media && o.media.type === de.o.EMBED && (o.isSurveyAd && (l = Object(M.a)(s, o.impressionId, o.postId, i), d = 475, c = 475), e.isExpando && o.media.provider !== de.v.Twitter && (d = u, c = p));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / c;
						m = Math.abs(e - de.b) > .01
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
					var e, t, s;
					const {
						autoplayPref: i,
						className: n,
						crosspost: a,
						currentUserId: r,
						fireAdPixelsOfType: d,
						flairStyleTemplate: c,
						forceAspectRatio: p,
						isCommentsPage: m,
						isExpando: h,
						isGalleryTileLayout: g,
						isListing: b,
						isMediumHeight: f,
						isMp4DeliveryEnabled: v,
						isNotCardView: E,
						isNsfwBlurSubreddit: x,
						isNSFW: y,
						isOptionalTextExpEnabled: O,
						isSpoiler: w,
						isTitleOnly: I,
						nightmode: S,
						openPost: C,
						pageLayer: T,
						post: j,
						showCentered: N,
						showFull: P = !1,
						shouldUseShredditPlayer: M,
						subredditOrProfileDisplayText: k
					} = this.props, {
						canLoadContent: _,
						isBackgrounded: D,
						shouldPause: B,
						shouldStop: V,
						viewportWidth: U
					} = this.state, H = x && y;
					if (!j.media) return null;
					const K = j.isSponsored || Object(L.u)(T);
					let $;
					j.media.type !== de.o.TEXT && ($ = j.media.richtextContent);
					const z = O && $ && !K,
						q = D || B,
						Q = V,
						{
							source: X,
							obfuscated: Z,
							height: ee,
							width: te,
							needsBackgroundBlur: se
						} = this.getMediaInfo(this.props, this.state, r, S),
						ie = {
							showCentered: N,
							isListing: b,
							showFull: P,
							height: ee,
							width: te,
							provider: null === (e = j.media) || void 0 === e ? void 0 : e.provider
						},
						ne = {
							...ie,
							className: n,
							forceAspectRatio: p,
							viewportWidth: U
						},
						ae = this.shouldBlur(),
						oe = !((null === (t = j.pollData) || void 0 === t ? void 0 : t.isPrediction) && !m),
						re = !(!j.isSponsored || !j.source),
						le = Object(jt.vb)() || "",
						ce = j.isSponsored ? Object(it.b)(j.id, {
							fireAdPixelsOfType: d,
							openPost: C
						}) : o.a,
						me = e => {
							ce && ce(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (Z && ae) return l.a.createElement(Le.a, Jt({}, ne, {
						blurSrc: Z
					}), l.a.createElement(es, {
						isVisible: _
					}, l.a.createElement(Pe.a, Jt({}, ie, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: b,
						isNSFW: y,
						isNsfwBlockingModalEligible: H,
						isSpoiler: w,
						isVideoThumbnail: !!j.media && j.media.type === de.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: j.id,
						shouldBlur: ae,
						source: Z,
						outboundUrl: re && j.source.outboundUrl || void 0,
						originalSource: X,
						onPostMediaClick: this.handlePostMediaClick,
						fireAdPixelsOfType: this.props.fireAdPixelsOfType
					}))));
					if (!j.media) return null;
					switch (j.media.type) {
						case de.o.RTJSON:
							const e = Object(mt.a)(j, null);
							if (null === e) return null;
							if (!P && !Object(pt.a)(j, null === (s = this.props.theme) || void 0 === s ? void 0 : s.subredditContext)) return null;
							const t = j.isMeta ? vt(e, j.id) : e;
							return l.a.createElement(l.a.Fragment, null, oe && l.a.createElement(Ke, {
								canLoadContent: _,
								className: n,
								"data-click-id": "text",
								"data-adclicklocation": u.a.MEDIA,
								isCommentsPage: m,
								isExpando: h,
								isMediumHeight: f,
								isRichTextTruncated: j.media.isRichtextPreview,
								isTitleOnly: I,
								postId: j.id,
								showFull: P
							}, l.a.createElement(dt.b, {
								altText: this.getAltText(),
								content: t,
								flairStyleTemplate: c,
								isListing: b,
								isNSFW: y,
								isNsfwBlockingModalEligible: H,
								isSpoiler: w,
								mediaMetadata: j.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: j.id,
								rtJsonElementProps: ls(this.props),
								renderMediaAsLinks: b,
								shouldBlur: ae
							}), l.a.createElement(G.b, {
								content: t
							})), l.a.createElement(Re, {
								postId: j.id,
								isCommentsPage: !!m
							}));
						case de.o.TEXT:
							if (Object(gt.a)(j)) {
								const e = "Text post should not include body content";
								return W.c.withScope(t => {
									t.setExtra("info", {
										post: j,
										isListing: b,
										isCommentsPage: m
									}), W.c.captureMessage(e)
								}), Object(A.a)() && console.log(`${j.id}: ${e}`), l.a.createElement(l.a.Fragment, null, oe && l.a.createElement(Ke, {
									postId: j.id,
									className: n,
									"data-click-id": "text",
									"data-adclicklocation": u.a.MEDIA,
									isCommentsPage: m,
									showFull: P
								}, l.a.createElement(lt, {
									flairStyleTemplate: c,
									html: j.isMeta ? ft(j.media.content, j.id, Kt.a.hiddenLink) : j.media.content
								})), l.a.createElement(Re, {
									postId: j.id,
									isCommentsPage: !!m
								}))
							}
							return l.a.createElement(Re, {
								postId: j.id,
								isCommentsPage: !!m
							});
						case de.o.EMBED:
							return this.props.isMiniCard && j.preview && j.preview.url ? l.a.createElement(Le.a, Jt({}, ne, {
								alwaysWrapMedia: !0
							}), l.a.createElement(es, {
								isVisible: _
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Pe.a, Jt({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								postId: j.id,
								shouldBlur: ae,
								source: j.preview.url,
								originalSource: j.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(st.a, null)))) : de.h.has(j.media.provider) ? j.media.provider === de.v.Twitter ? l.a.createElement(l.a.Fragment, null, l.a.createElement(et, {
								canLoadContent: _,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ne,
								onIframeLoaded: this.onIframeLoaded,
								source: X,
								title: j.title,
								postId: j.id
							}), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Jt({}, ne, {
								alwaysWrapMedia: !0,
								height: h ? ee : de.j,
								width: h ? te : de.j * (16 / 9)
							}), _ && l.a.createElement(Y.a, {
								childRef: this.storeChildRef,
								height: h ? ee : de.j,
								width: h ? te : void 0,
								isListing: b,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: N,
								showFull: P,
								source: X,
								title: j.title
							})), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Jt({}, ne, {
								alwaysWrapMedia: !0
							}), _ && l.a.createElement(Y.a, Jt({}, ie, {
								isResponsive: h || j.media.provider === de.v.IFrameEmbed,
								title: j.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: X,
								fullWidth: j.media.provider === de.v.IFrameEmbed
							}))), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							}));
						case de.o.GIFVIDEO: {
							let e = ee,
								t = te;
							return e > de.j && (t = te / ee * (e = de.j)), l.a.createElement(Le.a, Jt({}, ne, {
								blurSrc: se ? j.media.gifBackgroundImage : void 0
							}), l.a.createElement(es, {
								isVisible: _
							}, l.a.createElement(tt.a, Jt({}, ie, {
								isNotCardView: E,
								height: h ? void 0 : e,
								width: h ? void 0 : t,
								postId: j.id,
								shouldLoad: !0,
								shouldPause: b && q,
								source: X,
								originalSource: j.media.content,
								isGif: !0,
								isPromoted: j.isSponsored
							})), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							})))
						}
						case de.o.VIDEO: {
							const e = j.media.posterUrl || j.preview && j.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Jt({}, ne, {
								alwaysWrapMedia: !0
							}), l.a.createElement(es, {
								isVisible: _
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Pe.a, Jt({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								postId: j.id,
								shouldBlur: ae,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(st.a, null)))), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							}));
							const t = j.reactedFrom && j.attributionInfo ? {
									id: j.id,
									reactedFrom: {
										...j.reactedFrom
									},
									attributionInfo: {
										...j.attributionInfo
									},
									isReactAllowed: j.isReactAllowed
								} : void 0,
								s = M ? l.a.createElement(Ft, {
									packagedMedia: j.media.packagedMedia,
									post: j,
									postId: j.id,
									hlsSource: j.media.hlsUrl,
									isGif: j.media.isGif,
									isMp4DeliveryEnabled: v,
									isSponsored: j.isSponsored,
									pageLayer: this.props.pageLayer,
									posterUrl: j.media.posterUrl,
									scrubberThumbSource: j.media.scrubberThumbSource
								}) : l.a.createElement($t, {
									key: j.id,
									autoPlay: i && !1 === B,
									isExpando: h,
									shouldLoad: !0,
									shouldPause: q,
									shouldStop: Q,
									isBackgrounded: D,
									hlsSource: j.media.hlsUrl,
									mpegDashSource: j.media.dashUrl,
									isGif: j.media.isGif,
									scrubberThumbSource: j.media.scrubberThumbSource,
									postId: j.id,
									isSponsored: j.isSponsored,
									onAdPostClick: me,
									callToActionSource: j.source || void 0,
									callToActionText: j.callToAction,
									isListing: b,
									posterUrl: j.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: j.id,
									muxVideoIsLive: !1,
									muxVideoTitle: j.title,
									sessionId: le,
									reactPostInfo: t,
									isCommentsPage: m
								}),
								n = l.a.createElement(Le.a, Jt({}, ne, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), _ ? s : null);
							return j.isSponsored ? l.a.createElement(F.a, {
								post: j,
								trackVideo: !0
							}, n) : l.a.createElement(l.a.Fragment, null, n, z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							}))
						}
						case de.o.IMAGE:
							const o = this.state.viewportHeight - 2 * Qt,
								r = this.state.viewportWidth - 2 * Qt;
							let d = X;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (j.thumbnail && Object(R.a)(j.thumbnail.url) ? d = j.thumbnail.url : j.preview && Object(R.a)(j.preview.url) && (d = j.preview.url)), l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, Jt({}, ne, {
								blurSrc: se ? d : void 0,
								isExpando: !!h
							}), l.a.createElement(es, {
								isVisible: _
							}, l.a.createElement(Pe.a, Jt({}, ie, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								maxHeight: h ? o : void 0,
								maxWidth: h ? r : void 0,
								postId: j.id,
								shouldBlur: ae,
								source: d,
								outboundUrl: re && j.source.outboundUrl || void 0,
								isSponsored: j.isSponsored,
								originalSource: j.media.content,
								onPostMediaClick: this.handlePostMediaClick,
								fireAdPixelsOfType: this.props.fireAdPixelsOfType
							})))), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							}));
						case de.o.GALLERY:
							const p = pe(j.media.mediaMetadata || {}, ue(b), de.p, te),
								x = (he = j.media.gallery, ge = j.isSponsored, he && he.items && !ge && he.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? de.i : 0);
							return l.a.createElement(Le.a, Jt({}, ne, {
								blurSrc: se ? X : void 0,
								isExpando: !!h,
								maxGalleryHeight: p + x,
								className: Kt.a.galleryMediaContainer,
								isGalleryTileLayout: g
							}), l.a.createElement(es, {
								isVisible: _
							}, l.a.createElement(Ne, {
								post: j,
								postId: j.id,
								postTitle: j.title,
								subredditName: k,
								galleryItems: j.media.gallery ? j.media.gallery.items : [],
								mediaMetadata: j.media.mediaMetadata || {},
								imageHeight: p,
								captionHeight: x,
								isSponsored: j.isSponsored,
								showPromotedCTA: Object(L.w)(j),
								className: this.props.imageBoxClassName,
								isListing: b,
								isNSFW: y,
								isNsfwBlockingModalEligible: H,
								isSpoiler: w,
								shouldBlur: ae,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!g,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: _
							}), z && l.a.createElement(J.a, {
								content: $,
								rtJsonElementProps: ls(this.props)
							})));
						default:
							return null
					}
					var he, ge
				}
			}
			const cs = as(rs(Object(p.a)(Object(D.a)(ds))))
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
						experimentName: i.Rb
					}) === i.Td
				})(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.b07a14af85b47ed78ab7.js.map