// https://www.redditstatic.com/desktop2x/SubredditForkingCTA.a21bd922541cc6d86219.js
// Retrieved at 5/4/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditForkingCTA"], {
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(t, _, e) {
			t.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(t, _, e) {
			"use strict";
			var o = e("./node_modules/fbt/lib/FbtPublic.js"),
				n = e("./node_modules/react/index.js"),
				r = e.n(n),
				s = e("./node_modules/react-redux/es/index.js"),
				a = e("./node_modules/reselect/es/index.js"),
				i = e("./src/reddit/actions/modal.ts"),
				d = e("./src/reddit/actions/tooltip.ts"),
				c = e("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = e("./src/reddit/components/TrackingHelper/index.tsx"),
				l = e("./src/reddit/constants/modals.ts"),
				m = e("./src/reddit/controls/Button/index.tsx"),
				p = e("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = e("./src/reddit/selectors/user.ts"),
				x = e("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = e.n(x),
				y = e("./src/lib/lessComponent.tsx");
			const h = "create-community-button",
				g = y.a.wrapped(c.c, "StyledTooltip", f.a),
				j = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: t => !Object(b.qb)(t),
					userIsSuspended: b.Y
				});
			_.a = Object(s.b)(j, (t, _) => {
				let {
					eventSource: e
				} = _;
				return {
					openCommunityCreation: _ => {
						_(Object(p.c)(e)), t(Object(i.h)(l.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => t(Object(d.f)({
						tooltipId: h
					})),
					onHideTooltip: () => t(Object(d.i)())
				}
			})(Object(u.c)(t => {
				let {
					className: _,
					eventSource: e,
					onShowTooltip: n,
					onHideTooltip: s,
					openCommunityCreation: a,
					sendEvent: i,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: c,
					onClick: u
				} = t;
				return r.a.createElement(m.t, {
					className: _,
					disabled: c || d,
					onClick: t => {
						u && u(t), a(i)
					},
					onMouseEnter: n,
					onMouseLeave: s,
					priority: m.c.Secondary,
					id: h,
					isFullWidth: !0
				}, o.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? r.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: h,
					text: o.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? r.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: h,
					text: o.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(t, _, e) {
			t.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(t, _, e) {
			"use strict";
			e.d(_, "b", (function() {
				return m
			})), e.d(_, "e", (function() {
				return p
			})), e.d(_, "n", (function() {
				return b
			})), e.d(_, "p", (function() {
				return x
			})), e.d(_, "o", (function() {
				return f
			})), e.d(_, "f", (function() {
				return y
			})), e.d(_, "m", (function() {
				return h
			})), e.d(_, "h", (function() {
				return g
			})), e.d(_, "j", (function() {
				return j
			})), e.d(_, "k", (function() {
				return w
			})), e.d(_, "g", (function() {
				return v
			})), e.d(_, "i", (function() {
				return k
			})), e.d(_, "q", (function() {
				return q
			})), e.d(_, "d", (function() {
				return z
			})), e.d(_, "l", (function() {
				return T
			})), e.d(_, "t", (function() {
				return C
			})), e.d(_, "u", (function() {
				return F
			})), e.d(_, "r", (function() {
				return A
			})), e.d(_, "a", (function() {
				return M
			})), e.d(_, "s", (function() {
				return S
			})), e.d(_, "c", (function() {
				return B
			}));
			var o = e("./src/lib/classNames/index.ts"),
				n = e("./src/lib/lessComponent.tsx"),
				r = e("./node_modules/react/index.js"),
				s = e.n(r),
				a = e("./src/reddit/controls/Button/index.tsx"),
				i = e("./src/reddit/controls/Input/ModalInput.tsx"),
				d = e("./src/reddit/icons/svgs/Close/index.tsx"),
				c = e("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = e.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var _ = 1; _ < arguments.length; _++) {
						var e = arguments[_];
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
					}
					return t
				}).apply(this, arguments)
			}
			const m = n.a.wrapped(d.a, "CloseIcon", u.a),
				p = n.a.section("ModalBody", u.a),
				b = n.a.section("ModalPostPreview", u.a),
				x = n.a.p("ModalText", u.a),
				f = n.a.div("ModalSmallText", u.a),
				y = n.a.div("ModalDescriptionText", u.a),
				h = n.a.div("ModalMetaText", u.a),
				g = n.a.label("ModalFormItem", u.a),
				j = n.a.wrapped(i.a, "ModalInput", u.a),
				w = n.a.label("ModalInputLabel", u.a),
				v = n.a.footer("ModalFooter", u.a),
				k = n.a.header("ModalHeader", u.a),
				q = n.a.div("ModalTitle", u.a),
				z = n.a.div("ModalAnnotation", u.a),
				T = n.a.div("ModalMain", u.a),
				C = n.a.textarea("TextArea", u.a),
				F = n.a.wrapped(a.l, "WarningButton", u.a),
				A = n.a.wrapped(a.l, "PrimaryButton", u.a),
				M = n.a.wrapped(a.o, "CancelButton", u.a),
				S = n.a.wrapped(a.r, "RemoveButton", u.a),
				B = t => {
					let {
						className: _,
						...e
					} = t;
					return s.a.createElement(a.t, l({
						kind: a.b.Button,
						priority: a.c.Primary,
						className: Object(o.a)(u.a.ConfirmButton, _)
					}, e))
				}
		},
		"./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx": function(t, _, e) {
			"use strict";
			e.r(_), e.d(_, "shouldDisplayCTA", (function() {
				return v
			}));
			var o = e("./node_modules/fbt/lib/FbtPublic.js"),
				n = e("./node_modules/react/index.js"),
				r = e.n(n),
				s = e("./node_modules/react-redux/es/index.js"),
				a = e("./src/reddit/actions/subredditCreation.ts"),
				i = e("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = e("./src/reddit/controls/TextButton/index.tsx"),
				c = e("./src/reddit/helpers/trackers/subredditForking.ts"),
				u = e("./node_modules/reselect/es/index.js"),
				l = e("./src/reddit/constants/experiments.ts"),
				m = e("./src/reddit/helpers/chooseVariant/index.ts"),
				p = e("./src/reddit/selectors/experiments/utils.ts");
			const b = Object(u.a)(t => Object(m.c)(t, {
					experimentName: l.kf,
					experimentEligibilitySelector: m.a
				}), p.a),
				x = Object(u.a)(b, t => t === l.qf.Enabled);
			var f = e("./src/reddit/selectors/posts.ts"),
				y = e("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = e("./src/reddit/components/TrackingHelper/index.tsx");
			const g = {
				t5_2vgfw: !0,
				t5_2qhrv: !0,
				t5_2f3oes: !0,
				t5_2f4l19: !0,
				t5_2f6rwj: !0,
				t5_2iokxd: !0,
				t5_2gpd6g: !0,
				t5_2hnraa: !0,
				t5_2ihy50: !0,
				t5_2hzjsw: !0,
				t5_2vjxi: !0,
				t5_1aynis: !0,
				t5_2g8yh6: !0,
				t5_2ka4cq: !0,
				t5_329jv: !0,
				t5_xuccg: !0,
				t5_2uneg: !0,
				t5_2rrq9: !0,
				t5_2ui8h: !0,
				t5_xcr6k: !0,
				t5_2qosw: !0,
				t5_2ztwm: !0,
				t5_2sxge: !0,
				t5_2gxt9z: !0,
				t5_26rn4p: !0,
				t5_2j4zt8: !0,
				t5_124gju: !0,
				t5_3elck: !0,
				t5_2vssw: !0,
				t5_2z1s2: !0,
				t5_2gl9od: !0,
				t5_sp8ku: !0,
				t5_12pesv: !0,
				t5_2vx87: !0,
				t5_38bow: !0,
				t5_2tisk: !0,
				t5_3g1p0: !0,
				t5_31rkl: !0,
				t5_11cwir: !0,
				t5_2w7ge: !0,
				t5_2r24h: !0,
				t5_2tzyn: !0,
				t5_2rfc5: !0,
				t5_2vjtw: !0,
				t5_2zy2x: !0,
				t5_38rfo: !0,
				t5_2x8y5: !0,
				t5_28jr8w: !0,
				t5_3gnez: !0,
				t5_3j7j1: !0,
				t5_vqneh: !0,
				t5_2ytpb: !0,
				t5_2enkbf: !0,
				t5_2sp3j: !0,
				t5_2szkz: !0,
				t5_3fig1: !0,
				t5_3e6xc: !0,
				t5_2lh2su: !0,
				t5_zj067: !0,
				t5_1b9104: !0,
				t5_298bry: !0,
				t5_30mux: !0,
				t5_220fwe: !0,
				t5_w97wp: !0,
				t5_3im8q: !0,
				t5_2u18u: !0,
				t5_10s27h: !0,
				t5_3n8fa: !0,
				t5_32t39: !0,
				t5_2c5nxf: !0,
				t5_1e074e: !0,
				t5_2ywkg: !0,
				t5_2tjh0: !0,
				t5_2ucc3: !0,
				t5_2utfi: !0,
				t5_318u8: !0,
				t5_26647x: !0,
				t5_2u7bp: !0,
				t5_3d8b3: !0,
				t5_2vq5h: !0,
				t5_2sl6z: !0,
				t5_27b08r: !0,
				t5_2ws4n: !0,
				t5_2iuocl: !0,
				t5_2hjglb: !0,
				t5_29zttp: !0,
				t5_37smh: !0,
				t5_2rggh: !0,
				t5_24oy71: !0,
				t5_q1ofh: !0,
				t5_2rfbj: !0,
				t5_2tfwo: !0,
				t5_2qnf5: !0,
				t5_2vwxs: !0,
				t5_31ux8: !0,
				t5_3a48d: !0,
				t5_ujpst: !0,
				t5_r4bzt: !0,
				t5_qjadm: !0,
				t5_rl58z: !0,
				t5_2sxz7: !0,
				t5_34380: !0,
				t5_2sl1j: !0,
				t5_3e468: !0,
				t5_39q6r: !0,
				t5_y216u: !0,
				t5_p5zv5: !0,
				t5_s5o7i: !0,
				t5_2rdpn: !0,
				t5_2eqx39: !0,
				t5_m3qch: !0,
				t5_2st2g: !0,
				t5_2yj3r: !0,
				t5_3jpxj: !0,
				t5_2zzq8: !0,
				t5_23o7up: !0,
				t5_hezwm: !0,
				t5_2axuxa: !0,
				t5_2v64n: !0,
				t5_32vxe: !0,
				t5_3ch8b: !0,
				t5_32ai2: !0,
				t5_srkgs: !0,
				t5_2s1qy: !0,
				t5_2v6p4: !0,
				t5_hlpvm: !0,
				t5_2z4au: !0,
				t5_1229nt: !0,
				t5_zlcza: !0,
				t5_2ybm2: !0,
				t5_3iitc: !0,
				t5_2swc5: !0,
				t5_2qpaq: !0,
				t5_11080t: !0,
				t5_375hf: !0,
				t5_3jodm: !0,
				t5_38dh1: !0,
				t5_2zdar: !0,
				t5_2dyrgb: !0,
				t5_2l0dw9: !0,
				t5_2ut04: !0,
				t5_2vjwh: !0,
				t5_35g76: !0,
				t5_3bmcp: !0,
				t5_3nuhq: !0,
				t5_38ivs: !0,
				t5_3li9g: !0,
				t5_kk43l: !0,
				t5_2ap2ow: !0,
				t5_31hrq: !0,
				t5_2qob4: !0,
				t5_2ck7mn: !0,
				t5_2y5iu: !0,
				t5_2higep: !0,
				t5_10vkok: !0,
				t5_i1ic4: !0,
				t5_2ryuf: !0,
				t5_kl0l6: !0,
				t5_2rcg0: !0,
				t5_2s4iu: !0,
				t5_3buzc: !0,
				t5_30s0l: !0,
				t5_3cia1: !0,
				t5_34hti: !0,
				t5_2gq13z: !0,
				t5_sbdr4: !0,
				t5_37839: !0,
				t5_3nlza: !0,
				t5_2ukr5: !0,
				t5_34na3: !0,
				t5_35ga9: !0,
				t5_3a7b5: !0,
				t5_2rips: !0,
				t5_3gaft: !0,
				t5_2x1s6: !0,
				t5_2xsu7: !0,
				t5_2tjrq: !0,
				t5_244x0l: !0,
				t5_378lb: !0,
				t5_u438e: !0,
				t5_2s86k: !0,
				t5_2wuvl: !0,
				t5_2rgv8: !0,
				t5_2uvig: !0,
				t5_3ma60: !0,
				t5_2vimd: !0,
				t5_swr1k: !0,
				t5_2eop3u: !0,
				t5_uwekw: !0,
				t5_2tfhb: !0,
				t5_3e789: !0,
				t5_3gloo: !0,
				t5_ztq9p: !0,
				t5_2rnfd: !0,
				t5_3hsgq: !0,
				t5_2tqrp: !0,
				t5_361bv: !0,
				t5_2s9y5: !0,
				t5_2x76k: !0,
				t5_25z7g2: !0,
				t5_2vp2p: !0,
				t5_2sf3p: !0,
				t5_30y9f: !0,
				t5_2qohd: !0,
				t5_2xuc0: !0,
				t5_3320b: !0,
				t5_2sevn: !0,
				t5_9z0l4: !0,
				t5_2s5k4: !0,
				t5_3jth5: !0,
				t5_3b3zt: !0,
				t5_2ufm7: !0,
				t5_2uypj: !0,
				t5_ym99w: !0,
				t5_j5v14: !0,
				t5_9x3ni: !0,
				t5_2re4m: !0,
				t5_2ufih: !0,
				t5_2v137: !0,
				t5_2qn6e: !0,
				t5_2u9hs: !0,
				t5_2t2mu: !0,
				t5_2snya: !0,
				t5_3bdpr: !0,
				t5_2huerk: !0,
				t5_23qrch: !0,
				t5_3pjdl: !0,
				t5_2w1ya: !0,
				t5_2twp0: !0,
				t5_vt3kk: !0,
				t5_2s71c: !0,
				t5_h8vzy: !0,
				t5_2so28: !0,
				t5_2tiwy: !0,
				t5_2xt2m: !0,
				t5_111dex: !0,
				t5_2u1d8: !0,
				t5_2qyr5: !0,
				t5_37qo7: !0,
				t5_3iw9k: !0,
				t5_o5qtn: !0,
				t5_2z8cu: !0,
				t5_2z3ri: !0,
				t5_11ky9g: !0,
				t5_3k1e5: !0,
				t5_2vvjz: !0,
				t5_2yxon: !0,
				t5_m4goj: !0,
				t5_g9c2o: !0,
				t5_2y7ah: !0,
				t5_2rb54: !0,
				t5_33k4w: !0,
				t5_37arz: !0,
				t5_7sptw: !0,
				t5_33li3: !0,
				t5_2tbgo: !0,
				t5_32zxv: !0,
				t5_2riou: !0,
				t5_2xczp: !0,
				t5_yb8pu: !0,
				t5_2r6f5: !0,
				t5_2v1nh: !0,
				t5_3a6r8: !0,
				t5_38kg2: !0,
				t5_2rep7: !0,
				t5_10goha: !0,
				t5_2y12s: !0,
				t5_2vkui: !0,
				t5_38u2r: !0,
				t5_y6tu3: !0,
				t5_2zt3z: !0,
				t5_2ynvy: !0,
				t5_2vleo: !0,
				t5_1rer7i: !0,
				t5_nf8jb: !0,
				t5_tlbkg: !0,
				t5_3hhfy: !0,
				t5_375yi: !0,
				t5_2txhi: !0,
				t5_2trcu: !0,
				t5_2unsf: !0,
				t5_3pars: !0,
				t5_12oaeb: !0,
				t5_2wlco: !0,
				t5_3jyoj: !0,
				t5_11hh9v: !0,
				t5_2t8y0: !0,
				t5_3iyxd: !0,
				t5_2r69l: !0,
				t5_2r443: !0,
				t5_2da4g7: !0,
				t5_1t2b5e: !0,
				t5_31krd: !0,
				t5_39j3o: !0,
				t5_2ugri: !0,
				t5_3e65q: !0,
				t5_37q51: !0,
				t5_3awid: !0,
				t5_znwx7: !0,
				t5_34fi6: !0,
				t5_2seno: !0,
				t5_2jkksm: !0,
				t5_2hjo02: !0,
				t5_2scci: !0,
				t5_10hrkp: !0,
				t5_2yzz6: !0,
				t5_2kwycl: !0,
				t5_3060r: !0,
				t5_2uv8f: !0,
				t5_2rd14: !0,
				t5_3gyyx: !0,
				t5_oye2k: !0,
				t5_29p87e: !0,
				t5_3ctla: !0,
				t5_323lw: !0,
				t5_2swk1: !0,
				t5_2bm11v: !0,
				t5_2s5w4: !0,
				t5_2y7er: !0,
				t5_23zs1q: !0,
				t5_2sbb0: !0,
				t5_2v1gk: !0,
				t5_2uean: !0,
				t5_2qbcr7: !0,
				t5_2td24: !0,
				t5_31noy: !0,
				t5_2r5qi: !0,
				t5_3fvwr: !0,
				t5_2otzzc: !0,
				t5_2etpnw: !0,
				t5_28l9xj: !0,
				t5_22hugq: !0,
				t5_2rb6c: !0,
				t5_2vuwh: !0,
				t5_32zn6: !0,
				t5_2ylwq: !0,
				t5_3fpjd: !0,
				t5_2qtjw: !0,
				t5_2musmv: !0,
				t5_3m2nd: !0,
				t5_2x0yu: !0,
				t5_2d7arm: !0,
				t5_3elu0: !0,
				t5_2dgcce: !0,
				t5_2r96e: !0,
				t5_2xrmi: !0,
				t5_3b912: !0,
				t5_2ceg4l: !0,
				t5_31thx: !0,
				t5_2ssp9: !0,
				t5_2cqact: !0,
				t5_2vxel: !0,
				t5_2uemv: !0,
				t5_2sl3m: !0,
				t5_392we: !0,
				t5_226ioy: !0,
				t5_3jev5: !0,
				t5_2ur93: !0,
				t5_26qn95: !0,
				t5_2sw4h: !0,
				t5_2cm9po: !0,
				t5_oquhm: !0,
				t5_ykjzi: !0,
				t5_3ig4u: !0,
				t5_2u1cu: !0,
				t5_335mp: !0,
				t5_3nhnb: !0,
				t5_xzs32: !0,
				t5_3bfwn: !0,
				t5_38b65: !0,
				t5_3ghmd: !0,
				t5_2t48l: !0,
				t5_3k2e4: !0,
				t5_l0045: !0,
				t5_3hx7h: !0,
				t5_37h1q: !0,
				t5_3ms6m: !0,
				t5_2723fr: !0,
				t5_2ue7j: !0,
				t5_fwqfi: !0,
				t5_2aqkvc: !0,
				t5_z2f6h: !0,
				t5_3fi5g: !0,
				t5_2rwn7: !0,
				t5_2s9mx: !0,
				t5_2wvsp: !0,
				t5_398ay: !0,
				t5_2r9d9: !0,
				t5_2h6ibi: !0,
				t5_2umb0: !0,
				t5_33p1y: !0,
				t5_1qgwn8: !0,
				t5_2tffr: !0,
				t5_32n75: !0,
				t5_145541: !0,
				t5_2yvcs: !0,
				t5_2zha2: !0,
				t5_2uu88: !0,
				t5_37yio: !0,
				t5_2ooo37: !0,
				t5_2xqyj: !0,
				t5_3av6z: !0,
				t5_xy3f3: !0,
				t5_2pvenn: !0,
				t5_3b2oe: !0,
				t5_22ym08: !0,
				t5_3ob6e: !0,
				t5_kkcm3: !0,
				t5_35oga: !0,
				t5_oa3f5: !0,
				t5_2sm2b: !0,
				t5_12fpz4: !0,
				t5_37rlo: !0,
				t5_394lv: !0,
				t5_xsgxy: !0,
				t5_2sgef: !0,
				t5_2vjt7: !0,
				t5_330c3: !0,
				t5_10jsp9: !0,
				t5_2tmkm: !0,
				t5_2qu0n: !0,
				t5_101t9z: !0,
				t5_exbes: !0,
				t5_3foit: !0,
				t5_31vap: !0,
				t5_3nrkh: !0,
				t5_2rnpq: !0,
				t5_2r6r1: !0,
				t5_33zbl: !0,
				t5_2t2tl: !0,
				t5_2wfgd: !0,
				t5_3e5rb: !0,
				t5_33uq7: !0,
				t5_2qjlh: !0,
				t5_2rjoz: !0,
				t5_2t1ke: !0,
				t5_10y10s: !0,
				t5_2gon1k: !0,
				t5_2vm0e: !0,
				t5_2w9v4: !0,
				t5_u4rgd: !0,
				t5_29jlth: !0,
				t5_2qpdi: !0,
				t5_2tu2k: !0,
				t5_2tdwb: !0,
				t5_2wf0y: !0,
				t5_2ys9h: !0,
				t5_3lm6p: !0,
				t5_2d9z7m: !0,
				t5_k2jsc: !0,
				t5_w6zja: !0,
				t5_2vvqm: !0,
				t5_2s7dr: !0,
				t5_37a2m: !0,
				t5_2taxe: !0,
				t5_2v6ko: !0,
				t5_kn2ic: !0,
				t5_346vk: !0,
				t5_3fj12: !0,
				t5_3cnlu: !0,
				t5_j8se6: !0,
				t5_28t2g8: !0,
				t5_3fwj5: !0,
				t5_k01ki: !0,
				t5_2jgv08: !0,
				t5_2rz7j: !0,
				t5_2u7i3: !0,
				t5_2tib8: !0,
				t5_iqu3o: !0,
				t5_2r8xv: !0,
				t5_38t9m: !0,
				t5_2xg89: !0,
				t5_29myfn: !0,
				t5_2hz1w9: !0,
				t5_3i99q: !0,
				t5_26y9ne: !0,
				t5_2ziu8: !0,
				t5_2s0oz: !0,
				t5_3bhwj: !0,
				t5_31w4q: !0,
				t5_2s95r: !0,
				t5_2tt6i: !0,
				t5_2t3na: !0,
				t5_31bh7: !0,
				t5_2yv4t: !0,
				t5_2rona: !0,
				t5_2v0q4: !0,
				t5_2qhwb: !0,
				t5_rnl48: !0,
				t5_mmkbx: !0,
				t5_2ukoi: !0,
				t5_35szq: !0,
				t5_1a7jde: !0,
				t5_2s00i: !0,
				t5_2crktz: !0,
				t5_xj4n6: !0,
				t5_11etuk: !0,
				t5_2gjv82: !0,
				t5_g4l9m: !0,
				t5_125317: !0,
				t5_v90y3: !0,
				t5_2uywa: !0,
				t5_2tv3f: !0,
				t5_3ihiv: !0,
				t5_2i2s8y: !0,
				t5_on7mj: !0,
				t5_367rr: !0,
				t5_2qhb0: !0,
				t5_meqwy: !0,
				t5_1q0mzb: !0,
				t5_2mwia7: !0,
				t5_ioxhj: !0,
				t5_2dqnia: !0,
				t5_xkyrs: !0,
				t5_2bf672: !0,
				t5_30tpp: !0,
				t5_31zur: !0,
				t5_3j6fm: !0,
				t5_2truv: !0,
				t5_3isyc: !0,
				t5_2r6tm: !0,
				t5_31clr: !0,
				t5_2wszx: !0,
				t5_2w23b: !0,
				t5_2fbqbu: !0,
				t5_2nfcr4: !0,
				t5_223gjn: !0,
				t5_2r9lw: !0,
				t5_2yu4n: !0,
				t5_26ivke: !0,
				t5_2r7hf: !0,
				t5_2y6wb: !0,
				t5_2siyd: !0,
				t5_2vhce: !0,
				t5_37949: !0,
				t5_3bw2q: !0,
				t5_1x7got: !0,
				t5_2sj20: !0,
				t5_2yr8p: !0,
				t5_hpa10: !0,
				t5_2s83v: !0,
				t5_2uhup: !0,
				t5_3kd88: !0,
				t5_2dptr3: !0,
				t5_1m5mgo: !0,
				t5_3mxkl: !0,
				t5_2gaz2f: !0,
				t5_2rzqe: !0,
				t5_2v0gp: !0,
				t5_2wcwt: !0,
				t5_2fjub6: !0,
				t5_2rnja: !0,
				t5_2h1szw: !0,
				t5_3iajh: !0,
				t5_f7of5: !0,
				t5_3cbwu: !0,
				t5_38j2o: !0,
				t5_2lew17: !0,
				t5_2w239: !0,
				t5_2rcda6: !0,
				t5_2t3hk6: !0,
				t5_38i2k: !0,
				t5_2geedn: !0,
				t5_2qnp9: !0,
				t5_2rxhfg: !0,
				t5_2r3x7: !0,
				t5_2s3zy: !0,
				t5_2st8p: !0,
				t5_3877g: !0,
				t5_2s0dh: !0,
				t5_2i1ger: !0,
				t5_3fn58: !0,
				t5_3172q: !0,
				t5_2ayr5e: !0,
				t5_2r21q: !0,
				t5_2r4jd: !0,
				t5_w86bx: !0,
				t5_37cku: !0,
				t5_2ygkh: !0,
				t5_2r5a8: !0,
				t5_o4xmc: !0,
				t5_29d2bq: !0,
				t5_2c2cq5: !0,
				t5_37f65: !0,
				t5_30db4: !0,
				t5_3npxk: !0,
				t5_2sqk0: !0,
				t5_2x8fo: !0,
				t5_3eu4d: !0,
				t5_38nco: !0,
				t5_2vjns: !0,
				t5_34g75: !0,
				t5_3hzfd: !0,
				t5_2rx2a: !0,
				t5_3evj8: !0,
				t5_2wkwe: !0,
				t5_3h2bj: !0,
				t5_2tfas: !0,
				t5_2tlp4: !0,
				t5_2g8tzk: !0,
				t5_xgis1: !0,
				t5_2re12: !0,
				t5_24ci2z: !0,
				t5_2iifdp: !0,
				t5_2gu8ff: !0,
				t5_3pru6: !0,
				t5_11241l: !0,
				t5_2cc8xz: !0,
				t5_2toqb: !0,
				t5_3p23s: !0,
				t5_2r1sm: !0,
				t5_2nsuo9: !0,
				t5_2bsb2v: !0,
				t5_28j5mo: !0,
				t5_30chd: !0,
				t5_32qkt: !0,
				t5_3br0u: !0,
				t5_2ewlyd: !0,
				t5_2unyk: !0,
				t5_33oyc: !0,
				t5_2peiu2: !0,
				t5_u9yet: !0,
				t5_26x00a: !0,
				t5_31eh0: !0,
				t5_113nhg: !0,
				t5_2u4qo: !0,
				t5_2eg19l: !0,
				t5_3o2rr: !0,
				t5_11ipki: !0,
				t5_2dwmeh: !0,
				t5_3huew: !0,
				t5_2wowk: !0,
				t5_2y16e: !0,
				t5_2p33ni: !0,
				t5_u9bpf: !0,
				t5_2sz0o: !0,
				t5_2uzdb: !0,
				t5_2yy3v: !0,
				t5_3epgi: !0,
				t5_25u68o: !0,
				t5_2gxaqv: !0,
				t5_2jdqvo: !0,
				t5_orblx: !0,
				t5_316x7: !0,
				t5_2gbjq8: !0,
				t5_2z1uz: !0,
				t5_2qjx0: !0,
				t5_29sro4: !0,
				t5_2cydqu: !0,
				t5_2x2ws: !0,
				t5_2hfzih: !0,
				t5_4asit: !0,
				t5_35wis: !0,
				t5_2ge25o: !0,
				t5_2bjovx: !0,
				t5_2ed1y3: !0,
				t5_2rai8: !0,
				t5_399lc: !0,
				t5_2ouh2n: !0,
				t5_2s6gsx: !0,
				t5_320js: !0,
				t5_2wukb: !0,
				t5_3oe1m: !0,
				t5_2j0urs: !0,
				t5_2u482: !0,
				t5_woqce: !0,
				t5_yljc2: !0,
				t5_38ape: !0,
				t5_34i6y: !0,
				t5_25e516: !0,
				t5_2skm2: !0,
				t5_2qh9c: !0,
				t5_2tiz2: !0,
				t5_2qohv: !0,
				t5_2yptt: !0,
				t5_2t5h8: !0,
				t5_3bhds: !0,
				t5_3d6ij: !0,
				t5_2rszb: !0,
				t5_2drmo6: !0,
				t5_2h4kok: !0,
				t5_30vim: !0,
				t5_2qngf: !0,
				t5_3bl9b: !0,
				t5_2uhxd6: !0,
				t5_2uul7: !0,
				t5_yrxu1: !0,
				t5_314tp: !0,
				t5_2to0i: !0,
				t5_2ipy2g: !0,
				t5_q7s9z: !0,
				t5_31vnv: !0,
				t5_38cmt: !0,
				t5_2rv1q: !0,
				t5_2xabe: !0,
				t5_135ltd: !0,
				t5_1w0yre: !0,
				t5_320qp: !0,
				t5_3ftg0: !0,
				t5_29psfr: !0,
				t5_39chn: !0,
				t5_2wc11: !0,
				t5_2kh441: !0,
				t5_2f1c98: !0,
				t5_3fud4: !0,
				t5_2o7ff4: !0,
				t5_2zsjt: !0,
				t5_2pz5as: !0,
				t5_3optq: !0,
				t5_piuol: !0,
				t5_2f50lc: !0,
				t5_3j12w: !0,
				t5_3151j: !0,
				t5_2hohol: !0,
				t5_10e7i0: !0,
				t5_2pnlmq: !0,
				t5_2226ix: !0,
				t5_291p0t: !0,
				t5_2t1vv: !0,
				t5_a3t2q: !0,
				t5_2i2u08: !0,
				t5_2ngihj: !0,
				t5_29xc8y: !0,
				t5_2waak: !0,
				t5_2cg6jn: !0,
				t5_2ve3t: !0,
				t5_2viod: !0,
				t5_2za1i: !0,
				t5_x6y08: !0,
				t5_31aph: !0,
				t5_2i2btr: !0,
				t5_31rgn: !0,
				t5_31ndt: !0,
				t5_2uupn: !0,
				t5_3ocsx: !0,
				t5_2fnsxv: !0,
				t5_35gcu: !0,
				t5_3fv67: !0,
				t5_2dd0o7: !0,
				t5_higvz: !0,
				t5_2xaha: !0,
				t5_3acg1: !0,
				t5_2ssa3: !0,
				t5_2tdx7: !0,
				t5_37fi0: !0,
				t5_ynuzu: !0,
				t5_2me3vb: !0,
				t5_2zdec: !0,
				t5_3k8o3: !0,
				t5_2hih8n: !0,
				t5_9no72: !0,
				t5_379x7: !0,
				t5_2ysxs: !0,
				t5_2xd2y: !0,
				t5_2vpl9: !0,
				t5_29hqye: !0,
				t5_2f4qal: !0,
				t5_2j9wq7: !0,
				t5_35yub: !0,
				t5_37tmz: !0,
				t5_2f6iq3: !0,
				t5_22ql4l: !0,
				t5_2rq8ze: !0,
				t5_31gg1: !0,
				t5_2j5u4v: !0,
				t5_3wfy4: !0,
				t5_2fsg13: !0,
				t5_2hcjqq: !0,
				t5_2gr58n: !0,
				t5_2r27j: !0,
				t5_2j4prs: !0,
				t5_2nb4qk: !0,
				t5_2iz61c: !0,
				t5_2jlqwy: !0,
				t5_2ixjqu: !0,
				t5_2ngzol: !0,
				t5_2f4scw: !0,
				t5_2sb09: !0,
				t5_2f21tj: !0,
				t5_2hvhhx: !0,
				t5_2iels8: !0,
				t5_2gy7w2: !0,
				t5_2dsmh2: !0,
				t5_2gn986: !0,
				t5_2kocpw: !0,
				t5_2hwizr: !0,
				t5_2fd2pp: !0,
				t5_2ibzqm: !0,
				t5_2iqcv2: !0,
				t5_2jkcgc: !0,
				t5_2iuh44: !0,
				t5_37tst: !0,
				t5_2hignz: !0,
				t5_13ag18: !0,
				t5_2zqv1: !0,
				t5_2yc6v: !0,
				t5_y9vqj: !0,
				t5_2l8e8a: !0,
				t5_2i2tkq: !0,
				t5_2uf64: !0,
				t5_3b96h: !0,
				t5_2jhfwt: !0,
				t5_27bszy: !0,
				t5_2itbp9: !0,
				t5_2sl09: !0,
				t5_38haz: !0,
				t5_29a295: !0,
				t5_36fpa: !0,
				t5_w8bms: !0,
				t5_3gmxg: !0,
				t5_2u7izy: !0,
				t5_2ige4g: !0,
				t5_2j3871: !0,
				t5_2w5d0: !0,
				t5_2s2350: !0,
				t5_x22nx: !0,
				t5_2sx3vs: !0,
				t5_2xs00: !0,
				t5_2dw38v: !0,
				t5_31uif: !0,
				t5_2zr89: !0,
				t5_2ig2vo: !0,
				t5_2enwpn: !0,
				t5_2ia4ss: !0,
				t5_2yvkh: !0,
				t5_2glfbd: !0,
				t5_2d7bzj: !0,
				t5_3484e: !0,
				t5_2jb7xd: !0,
				t5_2b7dcy: !0,
				t5_2i76jk: !0,
				t5_2gkzf0: !0,
				t5_3ma2c: !0,
				t5_ut6ul: !0,
				t5_2y5el: !0,
				t5_33p0k: !0,
				t5_2gqpsp: !0,
				t5_264m8d: !0,
				t5_w0fnl: !0,
				t5_vpwg2: !0,
				t5_29mf1x: !0,
				t5_2x93n: !0,
				t5_2xkuq: !0,
				t5_mme3d: !0,
				t5_2st34z: !0,
				t5_2jhc2r: !0,
				t5_2i5idp: !0,
				t5_3gr1t: !0,
				t5_2g17zj: !0,
				t5_2fsy4d: !0,
				t5_2u37m: !0,
				t5_2ybnj: !0,
				t5_2wwwx: !0,
				t5_2yutr: !0,
				t5_3ncne: !0,
				t5_2giwy8: !0,
				t5_2fhubc: !0,
				t5_2i8fw7: !0,
				t5_2um3gv: !0,
				t5_2icgu1: !0,
				t5_2i6gud: !0,
				t5_2i8ffk: !0,
				t5_2if26c: !0,
				t5_2e3g96: !0,
				t5_2umpbc: !0,
				t5_2o9nd6: !0,
				t5_3hp6v: !0,
				t5_2qzjf: !0,
				t5_2t4a8: !0,
				t5_26hbl0: !0,
				t5_y9oei: !0,
				t5_3erof: !0,
				t5_3elzj: !0,
				t5_2mzt3t: !0,
				t5_3jixv: !0,
				t5_2rgcu: !0,
				t5_2rumf: !0,
				t5_2vnen: !0,
				t5_2u0d9: !0,
				t5_2gjdcg: !0,
				t5_2eq9ss: !0,
				t5_ufbky: !0,
				t5_2tow2f: !0,
				t5_2e1smw: !0,
				t5_3agne: !0,
				t5_2uoxd: !0,
				t5_2fqzv8: !0,
				t5_jf2l0: !0,
				t5_2uape: !0,
				t5_2688zk: !0,
				t5_2jk2ct: !0,
				t5_2qj5e: !0,
				t5_2znzz: !0,
				t5_32ul9: !0
			};
			var j = e("./src/reddit/components/SubredditForkingCTA/index.m.less"),
				w = e.n(j);
			const v = (t, _) => {
					const e = Object(f.U)(t, {
						..._,
						disallowProfile: !0
					});
					return !(!e || (null == g ? void 0 : g[e.id])) && !!x(t)
				},
				k = Object(s.b)(() => Object(u.c)({
					shouldDisplayCTA: v
				}), (t, _) => {
					let {
						postId: e
					} = _;
					return {
						setInitialCrosspostId: () => {
							t(Object(a.g)({
								crosspostId: e
							}))
						}
					}
				});
			_.default = Object(n.memo)(k(Object(h.c)(t => {
				let {
					shouldDisplayCTA: _,
					setInitialCrosspostId: e,
					postId: s,
					sendEvent: a,
					onClose: u
				} = t;
				Object(n.useEffect)(() => {
					_ && a(Object(c.c)(s))
				}, []);
				return _ ? r.a.createElement("div", {
					className: w.a.subreditForkingWrapper
				}, r.a.createElement(d.a, {
					className: w.a.closeButton,
					onClick: u
				}, r.a.createElement(i.b, null), r.a.createElement("div", null, o.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), r.a.createElement("h4", null, o.fbt._("Should this post be its own community?", null, {
					hk: "4BhmjF"
				})), r.a.createElement("p", null, o.fbt._("This post really took off. If you think it’s onto something, keep the conversation going and spin it off into its own community.", null, {
					hk: "4tJ2v1"
				})), r.a.createElement(y.a, {
					className: w.a.ctaButton,
					onClick: () => {
						e(), a(Object(c.a)(s))
					},
					eventSource: "subreddit_forking_cta"
				})) : null
			})))
		},
		"./src/reddit/components/SubredditForkingCTA/index.m.less": function(t, _, e) {
			t.exports = {
				titleFontH1: "_3AatpP2JY6HohTA7OQD3f2",
				titleFontH2: "_1h0Uy6kve7TE-QwoFof-kb",
				titleFontH3: "_1kVblN4PAJDl34ANL80xt9",
				titleFontH4: "_3wCdEE3y4rr0kpJNg16Wx8",
				titleFontH5: "XMncH4IM-G8LS0mf92o5t",
				titleFontH6: "_1eQzEqhrMAm-Z3x1akaEr7",
				metadataFont: "_3A9ah1-mpEDykCQqJSqVO_",
				flairFont: "_3c7M6uo_rMZ5TaXHBEYvib",
				labelsFont: "_26_sQVfxdz8og9jVF2srLW",
				actionFont: "NTTSmLE9k5_FeQgKSGfPm",
				smallButtonFont: "_2jyCs4vuj7Lh4ICo2vVCL6",
				largeButtonFont: "_3cMR7O3XNNx5HVf18qUbAj",
				strongTextFont: "TGDuIugE3HOAY4vp5kgeI",
				tabFont: "_f_0kJ7z8IaCgXAGVtutT",
				buttonFontXS: "_39xJ_MR4zSISPnSEilX9FH",
				buttonFontXs: "_39xJ_MR4zSISPnSEilX9FH",
				buttonFontS: "_3C5N66SlaADR0M8o97GeEV",
				buttonFontM: "_3-vuhkBydtfpXNdW1DkCl1",
				buttonFontL: "nsxCnGiULRlQgh1zqAelI",
				buttonFontXL: "oDZRHbP5BacWAQDYfMLoU",
				buttonFontXl: "oDZRHbP5BacWAQDYfMLoU",
				bodyFontH1: "tsZapkg7UEBiF5dyv11x-",
				bodyFontH2: "yndRol3o4wn3ny6eAeYGQ",
				bodyFontH3: "ouONftAs7THARyMzkSTQ8",
				bodyFontH4: "_2ITyA3GMN_Vm_50lJ8xP6w",
				bodyFontH5: "_2mxHSBKB7hAzOhMDlDE1kn",
				bodyFontH6: "_9RLsTzkyNs3uIWZW8m1Xb",
				bodyFontH6Small: "_3hUA32WfUxQgFedzUTOHIs",
				bodyFont: "_8N6UWAR6RakqQM-3iYDd7",
				bodyFontSmall: "_3CxhMH3DqHIj0DVQot9jEM",
				bodyFontMono: "_369uwFs0kv4OswbeTeNOHO",
				subreditForkingWrapper: "VZum83ruPO3j3NrSYBOpc",
				ctaButton: "_1ZLdQwbk2vD8obm1ezE3iI",
				closeButton: "_3jJ2xE661sIevAaBZ1dAHm"
			}
		},
		"./src/reddit/constants/keycodes.ts": function(t, _, e) {
			"use strict";
			var o, n;
			e.d(_, "a", (function() {
					return o
				})), e.d(_, "b", (function() {
					return n
				})),
				function(t) {
					t[t.ArrowDown = 40] = "ArrowDown", t[t.ArrowLeft = 37] = "ArrowLeft", t[t.ArrowRight = 39] = "ArrowRight", t[t.ArrowUp = 38] = "ArrowUp", t[t.Backspace = 8] = "Backspace", t[t.Delete = 46] = "Delete", t[t.Enter = 13] = "Enter", t[t.Escape = 27] = "Escape", t[t.F = 70] = "F", t[t.K = 75] = "K", t[t.Space = 32] = "Space", t[t.Tab = 9] = "Tab", t[t.Comma = 188] = "Comma"
				}(o || (o = {})),
				function(t) {
					t.ArrowDown = "ArrowDown", t.ArrowLeft = "ArrowLeft", t.ArrowRight = "ArrowRight", t.ArrowUp = "ArrowUp", t.Backspace = "Backspace", t.Enter = "Enter", t.Escape = "Escape", t.F = "f", t.Tab = "Tab", t.Space = " ", t.Comma = ","
				}(n || (n = {}))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(t, _, e) {
			"use strict";
			var o = e("./node_modules/react/index.js"),
				n = e.n(o),
				r = e("./node_modules/react-redux/es/index.js"),
				s = e("./src/lib/classNames/index.ts"),
				a = e("./src/reddit/actions/modal.ts"),
				i = e("./src/reddit/constants/keycodes.ts"),
				d = e("./src/reddit/controls/Input/index.m.less"),
				c = e.n(d);

			function u() {
				return (u = Object.assign || function(t) {
					for (var _ = 1; _ < arguments.length; _++) {
						var e = arguments[_];
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
					}
					return t
				}).apply(this, arguments)
			}
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = t => {
						let {
							keyCode: _
						} = t;
						_ === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: t,
						closeModal: _,
						...e
					} = this.props;
					return n.a.createElement("input", u({
						className: Object(s.a)(c.a.input, t),
						onKeyDown: this.handleKeyDown
					}, e))
				}
			}
			_.a = Object(r.b)(null, {
				closeModal: a.f
			})(l)
		},
		"./src/reddit/controls/Input/index.m.less": function(t, _, e) {
			t.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(t, _, e) {
			t.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(t, _, e) {
			"use strict";
			var o = e("./node_modules/react/index.js"),
				n = e.n(o),
				r = e("./src/lib/classNames/index.ts"),
				s = e("./src/reddit/controls/TextButton/index.m.less"),
				a = e.n(s);
			_.a = t => n.a.createElement("button", {
				children: t.children,
				className: Object(r.a)(a.a.textButton, t.className),
				disabled: t.disabled,
				onClick: t.onClick
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditForkingCTA.a21bd922541cc6d86219.js.map